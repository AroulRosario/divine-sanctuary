import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'

const connectionString = `${process.env.DATABASE_URL}`
const pool = new pg.Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'Hindi' },
    { code: 'ta', name: 'Tamil' },
    { code: 'te', name: 'Telugu' },
    { code: 'ml', name: 'Malayalam' },
    { code: 'kn', name: 'Kannada' },
    { code: 'bn', name: 'Bengali' },
    { code: 'mr', name: 'Marathi' },
]

const fullBooks = [
    'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth',
    '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah',
    'Esther', 'Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah',
    'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah',
    'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi', 'Matthew', 'Mark', 'Luke',
    'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians',
    'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon',
    'Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude', 'Revelation'
]

async function main() {
    console.log('Start seeding...')

    // 1. Seed Languages
    for (const lang of languages) {
        await prisma.language.upsert({
            where: { code: lang.code },
            update: {},
            create: lang,
        })
    }
    console.log('Languages seeded.')

    // 2. Seed basic Book structure
    for (let i = 0; i < fullBooks.length; i++) {
        await prisma.book.upsert({
            where: { id: `book-${i + 1}` },
            update: {},
            create: {
                id: `book-${i + 1}`,
                order: i + 1,
                name: fullBooks[i],
                abbreviation: fullBooks[i].substring(0, 3),
            },
        })
    }
    console.log('Books seeded.')

    // 3. Seed Sample Verses (John 1:1)
    const seedBibleContent = async (bookName: string, chapterNo: number, verseNo: number, translations: { lang: string, text: string }[]) => {
        const book = await prisma.book.findFirst({ where: { name: bookName } })
        if (!book) return;

        const chapter = await prisma.chapter.upsert({
            where: { id: `${book.id}-ch-${chapterNo}` },
            update: {},
            create: { id: `${book.id}-ch-${chapterNo}`, number: chapterNo, bookId: book.id }
        })

        const verse = await prisma.verse.upsert({
            where: { id: `${chapter.id}-v-${verseNo}` },
            update: {},
            create: { id: `${chapter.id}-v-${verseNo}`, number: verseNo, chapterId: chapter.id }
        })

        for (const trans of translations) {
            const language = await prisma.language.findUnique({ where: { code: trans.lang } })
            if (language) {
                await prisma.verseTranslation.upsert({
                    where: { verseId_languageId: { verseId: verse.id, languageId: language.id } },
                    update: { text: trans.text },
                    create: { text: trans.text, verseId: verse.id, languageId: language.id }
                })
            }
        }
    }

    // John 1:1
    await seedBibleContent('John', 1, 1, [
        { lang: 'en', text: 'In the beginning was the Word, and the Word was with God, and the Word was God.' },
        { lang: 'hi', text: 'आदि में वचन था, और वचन परमेश्वर के साथ था, और वचन परमेश्वर था।' },
        { lang: 'ta', text: 'ஆதியிலே வார்த்தை இருந்தது, அந்த வார்த்தை தேவனிடத்திலிருந்தது, அந்த வார்த்தை தேவனாயிருந்தது.' },
        { lang: 'te', text: 'ఆదియందు వాక్యముండెను, వాక్యము దேవునియొద్ద ఉండెను, వాక్యము దేవుడై యుండెను.' },
        { lang: 'ml', text: 'ആദിയിൽ വചനമുണ്ടായിരുന്നു; വചനം ദൈവത്തോടുകൂടെയായിരുന്നു; വചനം ദൈവമായിരുന്നു.' },
        { lang: 'kn', text: 'ಆದಿಯಲ್ಲಿ ವಾಕ್ಯವಿತ್ತು; ಆ ವಾಕ್ಯವು ದೇವರ ಬಳಿಯಲ್ಲಿತ್ತು; ಆ ವಾಕ್ಯವು ದೇವರಾಗಿತ್ತು.' },
        { lang: 'bn', text: 'আদিতে বাক্য ছিলেন, বাক্য ঈশ্বরের সঙ্গে ছিলেন এবং বাক্যই ঈশ্বর ছিলেন।' },
        { lang: 'mr', text: 'आरंभी शब्द होता, शब्द देवासंबंधी होता आणि शब्द देव होता.' },
    ])

    // Genesis 1:1
    await seedBibleContent('Genesis', 1, 1, [
        { lang: 'en', text: 'In the beginning God created the heaven and the earth.' },
        { lang: 'hi', text: 'आदि में परमेश्वर ने आकाश और पृथ्वी की सृष्टि की।' },
        { lang: 'ta', text: 'ஆதியிலே தேவன் வானத்தையும் பூமியையும் சிருஷ்டித்தார்.' },
    ])

    // Psalm 23:1
    await seedBibleContent('Psalms', 23, 1, [
        { lang: 'en', text: 'The Lord is my shepherd; I shall not want.' },
        { lang: 'hi', text: 'यहोवा मेरा चरवाहा है, मुझे कुछ घटी न होगी।' },
        { lang: 'ta', text: 'கர்த்தர் என் மேய்ப்பராயிருக்கிறார், நான் தாழ்ச்சியடையேன்.' },
    ])

    console.log('Sample verses expanded.')
    console.log('Seeding finished.')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

export interface BibleVerse {
    Verseid: string;
    Verse: string;
}

export interface BibleChapter {
    Verse: BibleVerse[];
}

export interface BibleBook {
    Chapter: BibleChapter[];
}

export interface BibleJsonRoot {
    Book: BibleBook[];
}

export const SUPPORTED_LANGUAGES = [
    { code: 'en', name: 'English', githubId: 'English' },
    { code: 'hi', name: 'Hindi', githubId: 'Hindi' },
    { code: 'ta', name: 'Tamil', githubId: 'Tamil' },
    { code: 'te', name: 'Telugu', githubId: 'Telugu' },
];

export const BIBLE_BOOKS = [
    { id: 'book-1', order: 1, name: 'Genesis', abbreviation: 'Gen' },
    { id: 'book-2', order: 2, name: 'Exodus', abbreviation: 'Exo' },
    { id: 'book-3', order: 3, name: 'Leviticus', abbreviation: 'Lev' },
    { id: 'book-4', order: 4, name: 'Numbers', abbreviation: 'Num' },
    { id: 'book-5', order: 5, name: 'Deuteronomy', abbreviation: 'Deu' },
    { id: 'book-6', order: 6, name: 'Joshua', abbreviation: 'Jos' },
    { id: 'book-7', order: 7, name: 'Judges', abbreviation: 'Jdg' },
    { id: 'book-8', order: 8, name: 'Ruth', abbreviation: 'Rut' },
    { id: 'book-9', order: 9, name: '1 Samuel', abbreviation: '1Sa' },
    { id: 'book-10', order: 10, name: '2 Samuel', abbreviation: '2Sa' },
    { id: 'book-11', order: 11, name: '1 Kings', abbreviation: '1Ki' },
    { id: 'book-12', order: 12, name: '2 Kings', abbreviation: '2Ki' },
    { id: 'book-13', order: 13, name: '1 Chronicles', abbreviation: '1Ch' },
    { id: 'book-14', order: 14, name: '2 Chronicles', abbreviation: '2Ch' },
    { id: 'book-15', order: 15, name: 'Ezra', abbreviation: 'Ezr' },
    { id: 'book-16', order: 16, name: 'Nehemiah', abbreviation: 'Neh' },
    { id: 'book-17', order: 17, name: 'Esther', abbreviation: 'Est' },
    { id: 'book-18', order: 18, name: 'Job', abbreviation: 'Job' },
    { id: 'book-19', order: 19, name: 'Psalms', abbreviation: 'Psa' },
    { id: 'book-20', order: 20, name: 'Proverbs', abbreviation: 'Pro' },
    { id: 'book-21', order: 21, name: 'Ecclesiastes', abbreviation: 'Ecc' },
    { id: 'book-22', order: 22, name: 'Song of Solomon', abbreviation: 'Sng' },
    { id: 'book-23', order: 23, name: 'Isaiah', abbreviation: 'Isa' },
    { id: 'book-24', order: 24, name: 'Jeremiah', abbreviation: 'Jer' },
    { id: 'book-25', order: 25, name: 'Lamentations', abbreviation: 'Lam' },
    { id: 'book-26', order: 26, name: 'Ezekiel', abbreviation: 'Eze' },
    { id: 'book-27', order: 27, name: 'Daniel', abbreviation: 'Dan' },
    { id: 'book-28', order: 28, name: 'Hosea', abbreviation: 'Hos' },
    { id: 'book-29', order: 29, name: 'Joel', abbreviation: 'Joe' },
    { id: 'book-30', order: 30, name: 'Amos', abbreviation: 'Amo' },
    { id: 'book-31', order: 31, name: 'Obadiah', abbreviation: 'Oba' },
    { id: 'book-32', order: 32, name: 'Jonah', abbreviation: 'Jon' },
    { id: 'book-33', order: 33, name: 'Micah', abbreviation: 'Mic' },
    { id: 'book-34', order: 34, name: 'Nahum', abbreviation: 'Nah' },
    { id: 'book-35', order: 35, name: 'Habakkuk', abbreviation: 'Hab' },
    { id: 'book-36', order: 36, name: 'Zephaniah', abbreviation: 'Zep' },
    { id: 'book-37', order: 37, name: 'Haggai', abbreviation: 'Hag' },
    { id: 'book-38', order: 38, name: 'Zechariah', abbreviation: 'Zec' },
    { id: 'book-39', order: 39, name: 'Malachi', abbreviation: 'Mal' },
    { id: 'book-40', order: 40, name: 'Matthew', abbreviation: 'Mat' },
    { id: 'book-41', order: 41, name: 'Mark', abbreviation: 'Mar' },
    { id: 'book-42', order: 42, name: 'Luke', abbreviation: 'Luk' },
    { id: 'book-43', order: 43, name: 'John', abbreviation: 'Joh' },
    { id: 'book-44', order: 44, name: 'Acts', abbreviation: 'Act' },
    { id: 'book-45', order: 45, name: 'Romans', abbreviation: 'Rom' },
    { id: 'book-46', order: 46, name: '1 Corinthians', abbreviation: '1Co' },
    { id: 'book-47', order: 47, name: '2 Corinthians', abbreviation: '2Co' },
    { id: 'book-48', order: 48, name: 'Galatians', abbreviation: 'Gal' },
    { id: 'book-49', order: 49, name: 'Ephesians', abbreviation: 'Eph' },
    { id: 'book-50', order: 50, name: 'Philippians', abbreviation: 'Php' },
    { id: 'book-51', order: 51, name: 'Colossians', abbreviation: 'Col' },
    { id: 'book-52', order: 52, name: '1 Thessalonians', abbreviation: '1Th' },
    { id: 'book-53', order: 53, name: '2 Thessalonians', abbreviation: '2Th' },
    { id: 'book-54', order: 54, name: '1 Timothy', abbreviation: '1Ti' },
    { id: 'book-55', order: 55, name: '2 Timothy', abbreviation: '2Ti' },
    { id: 'book-56', order: 56, name: 'Titus', abbreviation: 'Tit' },
    { id: 'book-57', order: 57, name: 'Philemon', abbreviation: 'Phm' },
    { id: 'book-58', order: 58, name: 'Hebrews', abbreviation: 'Heb' },
    { id: 'book-59', order: 59, name: 'James', abbreviation: 'Jas' },
    { id: 'book-60', order: 60, name: '1 Peter', abbreviation: '1Pe' },
    { id: 'book-61', order: 61, name: '2 Peter', abbreviation: '2Pe' },
    { id: 'book-62', order: 62, name: '1 John', abbreviation: '1Jo' },
    { id: 'book-63', order: 63, name: '2 John', abbreviation: '2Jo' },
    { id: 'book-64', order: 64, name: '3 John', abbreviation: '3Jo' },
    { id: 'book-65', order: 65, name: 'Jude', abbreviation: 'Jud' },
    { id: 'book-66', order: 66, name: 'Revelation', abbreviation: 'Rev' }
];

export async function fetchBibleJson(githubLanguageId: string): Promise<BibleJsonRoot | null> {
    const url = `https://raw.githubusercontent.com/godlytalias/Bible-Database/master/${githubLanguageId}/bible.json`;
    try {
        const res = await fetch(url, { next: { revalidate: 86400 } }); // Cache for 24h
        if (!res.ok) throw new Error(`Failed to fetch ${githubLanguageId} Bible`);
        const text = await res.text();

        // The JSON files might have a BOM or slight formatting issues.
        const cleanText = text.replace(/^\\uFEFF/, "").trim();
        return JSON.parse(cleanText) as BibleJsonRoot;
    } catch (e) {
        console.error(`fetchBibleJson error for ${githubLanguageId}:`, e);
        return null;
    }
}

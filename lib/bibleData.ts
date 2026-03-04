// Bible book name mapping for bible-api.com
// It uses book names like "Genesis", "Psalms", "John" etc.
export const SUPPORTED_LANGUAGES = [
    { code: 'en', name: 'English (KJV)', githubId: 'kjv' },
];

export const BIBLE_BOOKS = [
    { id: 'book-1', order: 1, name: 'Genesis', abbreviation: 'Gen', apiName: 'genesis' },
    { id: 'book-2', order: 2, name: 'Exodus', abbreviation: 'Exo', apiName: 'exodus' },
    { id: 'book-3', order: 3, name: 'Leviticus', abbreviation: 'Lev', apiName: 'leviticus' },
    { id: 'book-4', order: 4, name: 'Numbers', abbreviation: 'Num', apiName: 'numbers' },
    { id: 'book-5', order: 5, name: 'Deuteronomy', abbreviation: 'Deu', apiName: 'deuteronomy' },
    { id: 'book-6', order: 6, name: 'Joshua', abbreviation: 'Jos', apiName: 'joshua' },
    { id: 'book-7', order: 7, name: 'Judges', abbreviation: 'Jdg', apiName: 'judges' },
    { id: 'book-8', order: 8, name: 'Ruth', abbreviation: 'Rut', apiName: 'ruth' },
    { id: 'book-9', order: 9, name: '1 Samuel', abbreviation: '1Sa', apiName: '1+samuel' },
    { id: 'book-10', order: 10, name: '2 Samuel', abbreviation: '2Sa', apiName: '2+samuel' },
    { id: 'book-11', order: 11, name: '1 Kings', abbreviation: '1Ki', apiName: '1+kings' },
    { id: 'book-12', order: 12, name: '2 Kings', abbreviation: '2Ki', apiName: '2+kings' },
    { id: 'book-13', order: 13, name: '1 Chronicles', abbreviation: '1Ch', apiName: '1+chronicles' },
    { id: 'book-14', order: 14, name: '2 Chronicles', abbreviation: '2Ch', apiName: '2+chronicles' },
    { id: 'book-15', order: 15, name: 'Ezra', abbreviation: 'Ezr', apiName: 'ezra' },
    { id: 'book-16', order: 16, name: 'Nehemiah', abbreviation: 'Neh', apiName: 'nehemiah' },
    { id: 'book-17', order: 17, name: 'Esther', abbreviation: 'Est', apiName: 'esther' },
    { id: 'book-18', order: 18, name: 'Job', abbreviation: 'Job', apiName: 'job' },
    { id: 'book-19', order: 19, name: 'Psalms', abbreviation: 'Psa', apiName: 'psalms' },
    { id: 'book-20', order: 20, name: 'Proverbs', abbreviation: 'Pro', apiName: 'proverbs' },
    { id: 'book-21', order: 21, name: 'Ecclesiastes', abbreviation: 'Ecc', apiName: 'ecclesiastes' },
    { id: 'book-22', order: 22, name: 'Song of Solomon', abbreviation: 'Sng', apiName: 'song+of+solomon' },
    { id: 'book-23', order: 23, name: 'Isaiah', abbreviation: 'Isa', apiName: 'isaiah' },
    { id: 'book-24', order: 24, name: 'Jeremiah', abbreviation: 'Jer', apiName: 'jeremiah' },
    { id: 'book-25', order: 25, name: 'Lamentations', abbreviation: 'Lam', apiName: 'lamentations' },
    { id: 'book-26', order: 26, name: 'Ezekiel', abbreviation: 'Eze', apiName: 'ezekiel' },
    { id: 'book-27', order: 27, name: 'Daniel', abbreviation: 'Dan', apiName: 'daniel' },
    { id: 'book-28', order: 28, name: 'Hosea', abbreviation: 'Hos', apiName: 'hosea' },
    { id: 'book-29', order: 29, name: 'Joel', abbreviation: 'Joe', apiName: 'joel' },
    { id: 'book-30', order: 30, name: 'Amos', abbreviation: 'Amo', apiName: 'amos' },
    { id: 'book-31', order: 31, name: 'Obadiah', abbreviation: 'Oba', apiName: 'obadiah' },
    { id: 'book-32', order: 32, name: 'Jonah', abbreviation: 'Jon', apiName: 'jonah' },
    { id: 'book-33', order: 33, name: 'Micah', abbreviation: 'Mic', apiName: 'micah' },
    { id: 'book-34', order: 34, name: 'Nahum', abbreviation: 'Nah', apiName: 'nahum' },
    { id: 'book-35', order: 35, name: 'Habakkuk', abbreviation: 'Hab', apiName: 'habakkuk' },
    { id: 'book-36', order: 36, name: 'Zephaniah', abbreviation: 'Zep', apiName: 'zephaniah' },
    { id: 'book-37', order: 37, name: 'Haggai', abbreviation: 'Hag', apiName: 'haggai' },
    { id: 'book-38', order: 38, name: 'Zechariah', abbreviation: 'Zec', apiName: 'zechariah' },
    { id: 'book-39', order: 39, name: 'Malachi', abbreviation: 'Mal', apiName: 'malachi' },
    { id: 'book-40', order: 40, name: 'Matthew', abbreviation: 'Mat', apiName: 'matthew' },
    { id: 'book-41', order: 41, name: 'Mark', abbreviation: 'Mar', apiName: 'mark' },
    { id: 'book-42', order: 42, name: 'Luke', abbreviation: 'Luk', apiName: 'luke' },
    { id: 'book-43', order: 43, name: 'John', abbreviation: 'Joh', apiName: 'john' },
    { id: 'book-44', order: 44, name: 'Acts', abbreviation: 'Act', apiName: 'acts' },
    { id: 'book-45', order: 45, name: 'Romans', abbreviation: 'Rom', apiName: 'romans' },
    { id: 'book-46', order: 46, name: '1 Corinthians', abbreviation: '1Co', apiName: '1+corinthians' },
    { id: 'book-47', order: 47, name: '2 Corinthians', abbreviation: '2Co', apiName: '2+corinthians' },
    { id: 'book-48', order: 48, name: 'Galatians', abbreviation: 'Gal', apiName: 'galatians' },
    { id: 'book-49', order: 49, name: 'Ephesians', abbreviation: 'Eph', apiName: 'ephesians' },
    { id: 'book-50', order: 50, name: 'Philippians', abbreviation: 'Php', apiName: 'philippians' },
    { id: 'book-51', order: 51, name: 'Colossians', abbreviation: 'Col', apiName: 'colossians' },
    { id: 'book-52', order: 52, name: '1 Thessalonians', abbreviation: '1Th', apiName: '1+thessalonians' },
    { id: 'book-53', order: 53, name: '2 Thessalonians', abbreviation: '2Th', apiName: '2+thessalonians' },
    { id: 'book-54', order: 54, name: '1 Timothy', abbreviation: '1Ti', apiName: '1+timothy' },
    { id: 'book-55', order: 55, name: '2 Timothy', abbreviation: '2Ti', apiName: '2+timothy' },
    { id: 'book-56', order: 56, name: 'Titus', abbreviation: 'Tit', apiName: 'titus' },
    { id: 'book-57', order: 57, name: 'Philemon', abbreviation: 'Phm', apiName: 'philemon' },
    { id: 'book-58', order: 58, name: 'Hebrews', abbreviation: 'Heb', apiName: 'hebrews' },
    { id: 'book-59', order: 59, name: 'James', abbreviation: 'Jas', apiName: 'james' },
    { id: 'book-60', order: 60, name: '1 Peter', abbreviation: '1Pe', apiName: '1+peter' },
    { id: 'book-61', order: 61, name: '2 Peter', abbreviation: '2Pe', apiName: '2+peter' },
    { id: 'book-62', order: 62, name: '1 John', abbreviation: '1Jo', apiName: '1+john' },
    { id: 'book-63', order: 63, name: '2 John', abbreviation: '2Jo', apiName: '2+john' },
    { id: 'book-64', order: 64, name: '3 John', abbreviation: '3Jo', apiName: '3+john' },
    { id: 'book-65', order: 65, name: 'Jude', abbreviation: 'Jud', apiName: 'jude' },
    { id: 'book-66', order: 66, name: 'Revelation', abbreviation: 'Rev', apiName: 'revelation' },
];

export interface BibleApiVerse {
    book_id: string;
    book_name: string;
    chapter: number;
    verse: number;
    text: string;
}

export interface BibleApiResponse {
    reference: string;
    verses: BibleApiVerse[];
    text: string;
    translation_id: string;
    translation_name: string;
}

/**
 * Fetch a chapter from bible-api.com (free, public, no API key needed)
 * Translation: kjv (King James Version)
 */
export async function fetchChapterFromApi(bookApiName: string, chapter: number): Promise<BibleApiResponse | null> {
    try {
        const url = `https://bible-api.com/${bookApiName}+${chapter}?translation=kjv`;
        const res = await fetch(url, { next: { revalidate: 86400 } }); // Cache for 24h
        if (!res.ok) throw new Error(`bible-api.com returned ${res.status}`);
        return await res.json();
    } catch (error) {
        console.error(`Failed to fetch ${bookApiName} ${chapter}:`, error);
        return null;
    }
}

/**
 * Fetch a single random verse from a specific book (for daily/chat features)
 */
export async function fetchRandomVerse(bookApiName = 'psalms'): Promise<BibleApiVerse | null> {
    try {
        // Psalms 23 is always a great verse pool
        const chapters = [23, 91, 46, 1, 27, 139, 103, 121, 34, 37];
        const ch = chapters[Math.floor(Math.random() * chapters.length)];
        const data = await fetchChapterFromApi(bookApiName, ch);
        if (!data || data.verses.length === 0) return null;
        return data.verses[Math.floor(Math.random() * data.verses.length)];
    } catch {
        return null;
    }
}

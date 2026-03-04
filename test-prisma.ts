import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

console.log('Testing PrismaClient init with URL...')
try {
    // @ts-ignore
    const prisma = new PrismaClient({ url: process.env.DATABASE_URL })
    console.log('Init success!')
    await prisma.$connect()
    console.log('Connect success!')
} catch (e) {
    console.error('Init failed:', e)
}

console.log('Testing PrismaClient init with datasourceUrl...')
try {
    // @ts-ignore
    const prisma = new PrismaClient({ datasourceUrl: process.env.DATABASE_URL })
    console.log('Init success!')
    await prisma.$connect()
    console.log('Connect success!')
} catch (e) {
    console.error('Init failed:', e)
}

process.exit(0)

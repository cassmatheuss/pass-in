import { prisma } from '../src/lib/prisma'
async function seed() {
    await prisma.event.create({
        data: {
            id: '69110436-e953-45eb-8df4-7cfaebc45ad2',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'An event for passionate devs.',
            maximumAttendees: 120,
        }
    })
}

seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
})
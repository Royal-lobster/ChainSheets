const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faker = require('faker');

function generateJournalTitle() {
    const fields = ['Computational Neuroscience', 'Evolutionary Biology', 'Quantum Mechanics', 'Environmental Science', 'Cognitive Psychology'];
    const adjectives = ['International', 'Advanced', 'Contemporary', 'Innovative', 'Global'];

    return `${adjectives[Math.floor(Math.random() * adjectives.length)]} Journal of ${fields[Math.floor(Math.random() * fields.length)]}`;
}

function generateAcademicTitle() {
    const topics = ['Quantum Computing', 'Molecular Biology', 'Astrophysics', 'Neural Networks', 'Ecology'];
    const verbs = ['Exploring', 'Analyzing', 'Investigating', 'Reviewing', 'Assessing'];
    const objects = ['New Methods', 'Case Studies', 'Principles', 'Applications', 'Trends'];

    return `${verbs[Math.floor(Math.random() * verbs.length)]} ${topics[Math.floor(Math.random() * topics.length)]}: ${objects[Math.floor(Math.random() * objects.length)]}`;
}

function generateAcademicDescription() {
    const beginnings = ['This paper discusses', 'This study explores', 'This research focuses on'];
    const middles = ['the latest advancements in', 'the potential of', 'the challenges facing'];
    const ends = ['in a modern context.', 'from a global perspective.', 'with implications for future research.'];

    return `${beginnings[Math.floor(Math.random() * beginnings.length)]} ${middles[Math.floor(Math.random() * middles.length)]} ${ends[Math.floor(Math.random() * ends.length)]}`;
}

async function main() {
    for (let i = 1; i <= 5; i++) {
        await prisma.journal.create({
            data: {
                title: generateJournalTitle(),
                description: generateAcademicDescription(),
                topic: faker.random.word(),
                daoAddress: faker.finance.ethereumAddress(),
                ipfsImage: faker.random.alphaNumeric(10),
            },
        });
    }

    const journals = await prisma.journal.findMany();
    for (const journal of journals) {
        for (let i = 1; i <= 3; i++) {
            const paper = await prisma.paper.create({
                data: {
                    journalId: journal.id,
                    title: generateAcademicTitle(),
                    description: generateAcademicDescription(),
                    filehash: faker.random.alphaNumeric(16),
                    ipfsImage: faker.random.alphaNumeric(10),
                },
            });

            const member = await prisma.member.create({
                data: {
                    address: faker.finance.ethereumAddress(),
                    journalId: journal.id,
                },
            });

            const publisher = await prisma.publisher.create({
                data: {
                    paperId: paper.id,
                    address: faker.finance.ethereumAddress(),
                },
            });

            const holder = await prisma.holder.create({
                data: {
                    address: faker.finance.ethereumAddress(),
                    paperId: paper.id,
                },
            });

            await prisma.review.create({
                data: {
                    memberId: member.id,
                    publisherId: publisher.id,
                    reviewTitle: `Review for ${paper.title}`,
                    reviewDetails: faker.lorem.paragraph(),
                    reviewStatus: faker.random.arrayElement(['Published', 'Rejected', 'Review Pending', 'Changes Required']),
                },
            });
        }
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

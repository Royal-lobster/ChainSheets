const { PrismaClient } = require('@prisma/client');
import { randomBytes } from 'crypto';
const prisma = new PrismaClient();

function generateEthereumAddress() {
    return '0x' + randomBytes(20).toString('hex');
}

function getRandomElement<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

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

function generateJournalDescription() {
    const descriptions = [
        'A leading publication in the field of ',
        'An authoritative source of research in ',
        'A cutting-edge journal dedicated to ',
        'A comprehensive collection of research and reviews in ',
        'An interdisciplinary platform focusing on '
    ];
    const fields = ['life sciences', 'physical sciences', 'social sciences', 'medical research', 'engineering and technology'];
    
    return `${descriptions[Math.floor(Math.random() * descriptions.length)]}${fields[Math.floor(Math.random() * fields.length)]}, providing insights from top experts in the field.`;
}

function generateJournalTopic() {
    const topics = [
        'Artificial Intelligence',
        'Climate Change',
        'Genetic Engineering',
        'Renewable Energy',
        'Public Health',
        'Space Exploration',
        'Quantum Computing',
        'Sustainable Development',
        'Cybersecurity',
        'Nanotechnology'
    ];

    return topics[Math.floor(Math.random() * topics.length)];
}


function randomElement<T>(array: T[]): T | undefined {
    if (array.length === 0) {
        return undefined;
    }
    return array[Math.floor(Math.random() * array.length)];
}
    

async function main() {
    const journals = [];
    for (let i = 0; i < 5; i++) {
        const journal = await prisma.journal.create({
            data: {
                id: i,
                title: generateJournalTitle(),
                description: generateJournalDescription(),
                topic: generateJournalTopic(),
                daoAddress: generateEthereumAddress(),
                ipfsImage: generateEthereumAddress(),
            },
        });
        journals.push(journal);
    }

    const members = [];
    for (let i = 0; i < 100; i++) {
        const member = await prisma.member.create({
            data: {
                id: i,
                address: generateEthereumAddress(),
                journalId: randomElement(journals).id,
            },
        });
        members.push(member);
    }

    const publishers = [];
    const papers = [];
    for (let i = 0; i < 30; i++) {
        const paper = await prisma.paper.create({
            data: {
                journalId: randomElement(journals).id,
                title: generateAcademicTitle(),
                description: generateAcademicDescription(),
                filehash: generateEthereumAddress(),
                ipfsImage: generateEthereumAddress(),
            },
        });

        const pub = await prisma.publisher.create({
            data: {
                paperId: paper.id,
                address: generateEthereumAddress(),
            },
        });
        publishers.push(pub);
        papers.push(paper)
    }

    for (let i = 0; i < 40; i++) {
        await prisma.holder.create({
            data: {
                address: generateEthereumAddress(),
                paperId: randomElement(papers).id,
            },
        });
    }

    for (let i = 0; i < 20; i++) {
        await prisma.review.create({
            data :{
                memberId: randomElement(members).id,
                publisherId: randomElement(publishers).id,
                reviewTitle: `Review for ${randomElement(papers).title}`,
                reviewDetails: generateEthereumAddress(),
                reviewStatus: getRandomElement(['Published', 'Rejected', 'Review Pending', 'Changes Required']),
            }
        });
    }
}

main()
    .catch((e) => {
        console.log(e)
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

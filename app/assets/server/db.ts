import { PrismaClient } from '@prisma/client'

// Define a function that returns a new PrismaClient instance.
const prismaClientSingleton = () => new PrismaClient()

type g = { prisma: ReturnType<typeof prismaClientSingleton> }

// Attach the PrismaClient to the global object if it doesn't already exist.
// This ensures that in a hot-reloading development environment, you reuse the existing connection.
// Using `globalThis as any` is generally not recommended, but if you are sure about the structure of globalThis, it can be acceptable.
const prisma = (globalThis as unknown as g).prisma ?? prismaClientSingleton()

// In non-production environments, ensure that the prisma instance is reusable.
if (process.env.NODE_ENV !== 'production')
  (globalThis as unknown as g).prisma = prisma

// Export the prisma client instance.
export default prisma

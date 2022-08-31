import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



export default async function handler(req, res) {
     const clients = await prisma.client.findMany();
     res.json(clients)
}

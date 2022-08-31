import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()



export default async function handler(req, res) {
  const {id} = req.query;
  const getClient = await prisma.client.findUnique({
    where: {
      id: parseInt({id}.id),
    }})
  res.json(getClient)
}

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()



export default async function handler(req, res) {
  if (req.method === 'GET'){
    const {id} = req.query;
    const getStock = await prisma.stock.findUnique({
      where: {
        id: parseInt({id}.id),
      }})
    res.json(getStock)
  }
  
}

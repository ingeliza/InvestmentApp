import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()



export default async function handler(req, res) {
  if (req.method === 'GET'){
    const {id} = req.query;
    const getStocks = await prisma.stock.findMany({
      where: {
        clientId: parseInt({id}.id),
      }})
    res.json(getStocks)
  }
  
}

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



export default async function handler(req, res) {
     if (req.method === 'GET'){
          const stocks = await prisma.stock.findMany();
          res.json(stocks)
     }

     else if (req.method === 'POST'){
          const body = req.body

          console.log(body.company)
        
          if (!body.company || !body.unitPrice) {
            // Sends a HTTP bad request error code
            return res.status(400).json({ data: 'Created data not found' })
          }
        
          const createStock = await prisma.stock.create({
            data: {
                company: body.company,
                unitPrice: parseInt(body.unitPrice),
                currentPrice: parseInt(body.unitPrice),
                gainOrLoss: 0
            }
          })
        
          const stocks = await prisma.stock.findMany();
          res.json(stocks)
     }
}

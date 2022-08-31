import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



export default async function handler(req, res) {

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

  res.status(200).json(createStock)
}

  
    
  
  
  
  
  //const body = req.body;
// console.log(body)
    // const user = await prisma.client.create({
    //     data: {
    //       username: 'elsa',
    //       cash: 1000,
    //       gainOrLoss: 0
    //     },
    //   })
    // res.json(user)
// res.status(200).json({ data: `${body.unitPrice} ${body.company}` })

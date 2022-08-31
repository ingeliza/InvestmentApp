import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



export default async function handler(req, res) {

  const body = req.body

  console.log(body.username)

  if (!body.username) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'Created data not found' })
  }

  const createClient= await prisma.client.create({
    data: {
        username: body.username,
        cash: 1000,
        gainOrLoss: 0
    }
  })

  res.status(200).json(createClient)
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

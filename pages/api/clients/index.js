import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



export default async function handler(req, res) {

     if (req.method === 'GET'){
          const clients = await prisma.client.findMany();
          res.json(clients)
     }

     else if (req.method === 'POST'){
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

          const clients = await prisma.client.findMany();
          res.json(clients)
     }
}

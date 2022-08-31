import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()



export default async function handler(req, res) {
    const {id} = req.query
    const deleteClient = await prisma.client.delete({
        where: {
          id: parseInt({id}.id),
        },
      })
    res.status(200)
}




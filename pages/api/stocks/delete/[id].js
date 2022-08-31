import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()



export default async function handler(req, res) {
    const {id} = req.query
    const deleteStock = await prisma.stock.delete({
        where: {
          id: parseInt({id}.id),
        },
      })
    res.status(200)
}




import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()



export default async function handler(req, res) {
    const body = req.body
    const updateStock = await prisma.stock.update({
        where: {
            id: parseInt(body.company)
        },
        data: {
            currentPrice: parseInt(body.currentPrice)
        }
    })

    const stocks = await prisma.stock.findMany();
    res.json(stocks)


}

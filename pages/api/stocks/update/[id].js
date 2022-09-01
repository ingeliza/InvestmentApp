import { PrismaClient } from '@prisma/client'
import { time } from 'console';

const prisma = new PrismaClient()



export default async function handler(req, res) {
    const body = req.body

    //Get stock by it's ID
    const id = parseInt(body.company);
    const getStock = await prisma.stock.findUnique({
      where: {
        id: id,
      }})


    if (isNaN(parseInt(body.client)) === false){
        const updateStock = await prisma.stock.update({
            where: {
                id: id
            },
            data: {
                volume: parseInt(body.volume),
                clientId: parseInt(body.client),
                gainOrLoss: (getStock.currentPrice - getStock.unitPrice) * body.volume
            }
        })
    }
    else {
        const updateStock = await prisma.stock.update({
            where: {
                id: parseInt(body.company)
            },
            data: {
                currentPrice: parseInt(body.currentPrice),
                updatedAt: new Date(),
                gainOrLoss: (body.currentPrice - getStock.unitPrice) * getStock.volume
            }
        })
    }

    console.log((getStock.currentPrice - getStock.unitPrice) * getStock.volume)

    const stocks = await prisma.stock.findMany();
    res.json(stocks)


}

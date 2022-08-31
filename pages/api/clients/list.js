import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



export default async function handler(req, res) {
     const clients = await prisma.client.findMany();
     res.json(clients)
}









// async function getClients(){
//   const clients = await prisma.client.findMany();

//   return{
//     props: clients
//   }
// }

// export default getClients;





// const client = await prisma.client.findUnique({
//       where: {
//         id: 1,
//       },
//     })
// console.log(JSON.stringify(client))
    // const client = await prisma.clients.findUnique({
    //     where: {
    //       id: 1,
    //     },
    //   })
    // console.log(client)

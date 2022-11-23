import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export const getProductData = async (req: NextApiRequest, res: NextApiResponse) => {
    let prisma = new PrismaClient();

    let result = await prisma.product.findMany({
        where: {},
        select: {
            name: true,
            desc: true,
            price: true,
            imgsrc: true,
            id: false
        }
    }
    );

    return res.status(200).json(result);
}

export default getProductData;
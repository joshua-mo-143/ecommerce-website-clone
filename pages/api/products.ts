import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export const getProductData = async (req: NextApiRequest, res: NextApiResponse) => {
    let prisma = new PrismaClient();

    let result = await prisma.product.findMany({
        where: {},
        include: {
            favourited: true
        }
    }
    );

    return res.status(200).json(result);
}

export default getProductData;
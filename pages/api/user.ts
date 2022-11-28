import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { useSession } from 'next-auth/react';

export const Favourites = async (req: NextApiRequest, res: NextApiResponse) => {
    let prisma = new PrismaClient();
    let userEmail = req.body.email;
    let result = await prisma.user.findUnique({
        where: {
            email: userEmail
        },
        include: {
            favourited: true
        }
    }
    );

    return res.status(200).json(result);
}

export default Favourites;
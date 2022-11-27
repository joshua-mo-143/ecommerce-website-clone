import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import {PrismaClient} from '@prisma/client'
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { NextApiHandler } from "next";

let prisma = new PrismaClient();
const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

export const options = {
  providers: [
    GoogleProvider({
        // @ts-ignore
      clientId: process.env.GOOGLE_CLIENT_ID,
      // @ts-ignore
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  secret: process.env.AUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/login'
  }
}
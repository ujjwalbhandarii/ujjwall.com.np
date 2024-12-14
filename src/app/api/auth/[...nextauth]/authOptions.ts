import bcrypt from 'bcrypt';
import { getServerSession, type NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import CredientialProvider from 'next-auth/providers/credentials';

import prisma from '../../../../../prisma';
import { connectToDb } from '@/lib/dbConnect';

type User = {
  id: string;
  name: string;
  email: string;
  password?: string | null | undefined;
};

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),

  providers: [
    CredientialProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        await connectToDb();
        const existingUser: User | null = await prisma.user.findFirst({
          where: { email: credentials.email },
        });
        if (!existingUser) {
          return null;
        }
        if (existingUser.password) {
          const passwordMatch = await bcrypt.compare(
            credentials?.password,
            existingUser?.password,
          );
          if (!passwordMatch) {
            return null;
          }
          delete existingUser.password;
          return existingUser;
        } else {
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: 'jwt',
  },

  callbacks: {
    async jwt({ token, user }) {
      return { ...user, ...token };
    },

    async session({ session, token, user }) {
      session.user = token;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
};

export const getAuthSession = () => getServerSession(authOptions);

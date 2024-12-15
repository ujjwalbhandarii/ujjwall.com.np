import prisma from '@/lib/prisma';
import becrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { name, email, password } = body.data;

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'missing name, email or password' },
        { status: 422 },
      );
    }

    const existingUser = await prisma.user.findFirst({
      where: { email },
    });

    if (existingUser != null) {
      return NextResponse.json(
        {
          message: 'This email has already registered.',
        },
        { status: 403 },
      );
    }

    const hashedPassword = await becrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ user }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

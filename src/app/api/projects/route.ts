import prisma from '../../../../prisma';
import { NextResponse } from 'next/server';
import { connectToDb } from '@/lib/dbConnect';

export const dynamic = 'force-dynamic';

// get all the projects
// @Route /api/projects
export const GET = async () => {
  try {
    await connectToDb();

    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({ projects }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

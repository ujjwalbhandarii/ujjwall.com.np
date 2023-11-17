import prisma from '../../prisma';

export const dbConnect = async () => {
	try {
		await prisma.$connect();
	} catch (error: any) {
		return new Error('Failed to connect db, Error message: ' + error.message);
	}
};

import prisma from '../../prisma';

export const connectToDb = async () => {
	try {
		await prisma.$connect();
	} catch (error: any) {
		return new Error('Failed to connect db, Error message: ' + error.message);
	}
};

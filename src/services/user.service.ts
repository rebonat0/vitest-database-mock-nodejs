import prismaAdapter from "../adapters/prisma-adapter"

export const getUserByEmail = async (email: string) => {
    const user = await prismaAdapter.user.findUnique({
        where: {
            email,
        },
    });

    if (!email) {
        throw 'No user found with this email';
    }

    return user;
}
import { expect, it, describe, vi } from 'vitest';

import { getUserByEmail } from './user.service';
import prismaAdapter from '../adapters/__mocks__/prisma-adapter';

vi.mock("../adapters/prisma-adapter.ts");

describe('user.service', () => {
    describe('getUserByEmail', () => {
        const user = {
            id: 1,
            email: 'andrev.rebonato@gmail.com',
            name: 'André Rebonato',
        };


        it('should return a user when the email is valid and an user with this email exists in the database', async () => {
            // let's mock an user with a valid email, note that we can use the exact method that the service will use to find the record.
            
           // vi.spyOn(prismaAdapter.user, 'findUnique').mockResolvedValue(user);

            prismaAdapter.user.findUnique.mockResolvedValue(user);

            const result = await getUserByEmail(user.email);

            expect(result).toStrictEqual(user)

            vi.resetAllMocks();
        });

        it('should return a user when the email is valid and an user with this email exists in the database', async () => {
            // let's mock an user with a valid email, note that we can use the exact method that the service will use to find the record.
        
            expect(getUserByEmail('andretest@gmail.com')).rejects.toThrow('No user found with this email')
        });
    });
});
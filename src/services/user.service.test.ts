import { expect, it, describe, vi } from 'vitest';

import { getUserByEmail } from './user.service';
import prismaAdapter from '../adapters/prisma-adapter';

describe('user.service', () => {
    describe('getUserByEmail', () => {
        const user = {
            id: 1,
            email: 'andrev.rebonato@gmail.com',
            name: 'André Rebonato',
        };


        it('should return a user when the email is valid and an user with this email exists in the database', async () => {
            // let's mock an user with a valid email, note that we can use the exact method that the service will use to find the record.
            
            vi.spyOn(prismaAdapter.user, 'findUnique').mockResolvedValue(user);

            const result = await getUserByEmail(user.email);

            console.log('user by this email (mocked): ', result);

            expect(result).toStrictEqual(user)

            vi.resetAllMocks();
        });
    });
});
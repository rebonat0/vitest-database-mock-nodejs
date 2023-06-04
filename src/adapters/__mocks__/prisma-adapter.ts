import { beforeEach } from 'vitest';
import { mockDeep, mockReset } from 'vitest-mock-extended';

import type prismaAdapter from '../prisma-adapter';

const mockPrismaAdapter = mockDeep<typeof prismaAdapter>();

beforeEach(() => {
    mockReset(mockPrismaAdapter);
});

export { mockPrismaAdapter };

import { PrismaService } from "src/prisma.service";
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    login(response: any): void;
}

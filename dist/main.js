"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
const prisma = new client_1.PrismaClient();
async function main() {
    await prisma.$connect();
}
async function bootstrap() {
    main()
        .catch((e) => {
        throw e;
    })
        .finally(async () => {
        await prisma.$disconnect();
    });
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    (0, class_validator_1.useContainer)(app.select(app_module_1.AppModule), { fallbackOnErrors: true });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map
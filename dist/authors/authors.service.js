"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let AuthorsService = class AuthorsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createAuthorDto, response) {
        let temp;
        try {
            temp = await this.prisma.author.create({ data: createAuthorDto });
        }
        catch (_a) {
            return response
                .status(common_1.HttpStatus.BAD_REQUEST)
                .json({ mes: 'Please Enter Name Field' });
        }
        response.status(common_1.HttpStatus.OK).send(temp);
        return temp;
    }
    async findAll(response) {
        let authors;
        authors = await this.prisma.author.findMany();
        if (authors.length > 0) {
            response.status(common_1.HttpStatus.OK).send(authors);
            return authors;
        }
        else {
            return response
                .status(common_1.HttpStatus.BAD_REQUEST)
                .send({ mess: 'No Fields To Be Found' });
        }
    }
    findOne(id) {
        return `This action returns a #${id} author`;
    }
    update(id, updateAuthorDto) {
        return `This action updates a #${id} author`;
    }
    remove(id) {
        return `This action removes a #${id} author`;
    }
};
AuthorsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuthorsService);
exports.AuthorsService = AuthorsService;
//# sourceMappingURL=authors.service.js.map
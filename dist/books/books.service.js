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
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let BooksService = class BooksService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createBookDto, response) {
        let { title, authorId } = createBookDto;
        let temp;
        try {
            temp = await this.prisma.books.create({
                data: {
                    title,
                    author: {
                        connect: { id: authorId }
                    },
                },
            });
        }
        catch (_a) {
            return response
                .status(common_1.HttpStatus.BAD_REQUEST)
                .send({ message: 'Enter Author Id Please !' });
        }
        response.status(common_1.HttpStatus.OK).send({ title, authorId });
        return temp;
    }
    async findAll(response) {
        let temp;
        temp = await this.prisma.books.findMany();
        if (temp.length > 0) {
            response.status(common_1.HttpStatus.OK).send(temp);
        }
        else {
            response.status(common_1.HttpStatus.BAD_REQUEST).send({ message: 'Not Elements In the Table' });
        }
        return temp;
    }
    async findOne(id, response) {
        let temp;
        temp = await this.prisma.books.findUnique({ where: { id } });
        if (temp === null || temp === undefined) {
            response.status(common_1.HttpStatus.BAD_REQUEST).send({ mes: 'Please Type Correct ID' });
        }
        else {
            response.status(common_1.HttpStatus.OK).send(temp);
        }
        return temp;
    }
    update(id, data, response) {
        return this.prisma.books
            .update({
            data,
            where: {
                id,
            },
        })
            .catch(() => {
            return response
                .status(common_1.HttpStatus.BAD_REQUEST)
                .json({ mes: `ID Doesnot Match the Table ID's` });
        });
    }
    remove(where, response) {
        return this.prisma.books.delete({
            where,
        })
            .then((temp) => {
            return response.status(common_1.HttpStatus.BAD_REQUEST).send(temp);
        })
            .catch(() => {
            return response.status(common_1.HttpStatus.BAD_REQUEST).send({ mes: `ID Doesnot Match the Table ID's` });
        });
    }
    async getOneOrFail(userId) {
        let temp;
        temp = await this.prisma.books.findMany({
            where: {
                authorId: userId
            }
        });
        return temp;
    }
};
BooksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BooksService);
exports.BooksService = BooksService;
//# sourceMappingURL=books.service.js.map
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
exports.UserExistsRule = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const books_service_1 = require("../books.service");
let UserExistsRule = class UserExistsRule {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async validate(value) {
        const temp = await this.prismaService.getOneOrFail(value);
        if (temp.length > 0) {
            return false;
        }
        else {
            return true;
        }
    }
};
UserExistsRule = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'UserExists', async: true }),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [books_service_1.BooksService])
], UserExistsRule);
exports.UserExistsRule = UserExistsRule;
//# sourceMappingURL=user.validator.js.map
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
exports.ErrorEntity = exports.arrayStrings = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
exports.arrayStrings = [
    'name should not be empty',
    'Abbreviation must be between 1 and 4 characters long',
    'Abbreviation must contain only alphabetic character',
];
let ErrorEntity = exports.ErrorEntity = class ErrorEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, swagger_1.ApiProperty)({
        description: 'Array of errors',
        example: exports.arrayStrings,
    }),
    __metadata("design:type", Array)
], ErrorEntity.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Bad Request',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ErrorEntity.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 400 }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ErrorEntity.prototype, "statusCode", void 0);
exports.ErrorEntity = ErrorEntity = __decorate([
    (0, typeorm_1.Entity)('Error')
], ErrorEntity);
//# sourceMappingURL=Error.entities.js.map
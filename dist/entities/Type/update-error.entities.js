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
exports.UpdateErrorEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const Error_entities_1 = require("./Error.entities");
const arrayString = [
    ...Error_entities_1.arrayStrings,
    'id must be a mongodb id',
    'id should not be empty',
];
let UpdateErrorEntity = exports.UpdateErrorEntity = class UpdateErrorEntity extends Error_entities_1.ErrorEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, swagger_1.ApiProperty)({
        description: 'Id',
        example: arrayString,
    }),
    __metadata("design:type", Array)
], UpdateErrorEntity.prototype, "message", void 0);
exports.UpdateErrorEntity = UpdateErrorEntity = __decorate([
    (0, typeorm_1.Entity)('Error')
], UpdateErrorEntity);
//# sourceMappingURL=update-error.entities.js.map
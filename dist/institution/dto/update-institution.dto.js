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
exports.UpdateInstitutionDto = void 0;
const class_validator_1 = require("class-validator");
const create_institution_dto_1 = require("./create-institution.dto");
const mapped_types_1 = require("@nestjs/mapped-types");
const swagger_1 = require("@nestjs/swagger");
class UpdateInstitutionDto extends (0, mapped_types_1.PartialType)(create_institution_dto_1.CreateInstitutionDto) {
}
exports.UpdateInstitutionDto = UpdateInstitutionDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], UpdateInstitutionDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateInstitutionDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The logo-url of institution',
        required: true,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateInstitutionDto.prototype, "logoUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The Type of institution',
        required: true,
        example: '64e43f834a3f4f9134a835a2',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], UpdateInstitutionDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The Office related to institution',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateInstitutionDto.prototype, "office", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The tags for institution',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateInstitutionDto.prototype, "instituteTags", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The comments for institution',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateInstitutionDto.prototype, "comments", void 0);
//# sourceMappingURL=update-institution.dto.js.map
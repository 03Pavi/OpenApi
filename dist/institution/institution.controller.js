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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstitutionController = void 0;
const common_1 = require("@nestjs/common");
const institution_service_1 = require("./institution.service");
const create_institution_dto_1 = require("./dto/create-institution.dto");
const mongoose_1 = require("mongoose");
const update_institution_dto_1 = require("./dto/update-institution.dto");
const dist_1 = require("@nestjs/swagger/dist");
const institution_entites_1 = require("../entities/institution.entites");
const error_entities_1 = require("../entities/error.entities");
const update_error_entities_1 = require("../entities/update-error.entities");
let InstitutionController = exports.InstitutionController = class InstitutionController {
    constructor(institutionService) {
        this.institutionService = institutionService;
    }
    async create(response, createInstitution) {
        if (!createInstitution) {
            throw new common_1.HttpException('Invalid request body', common_1.HttpStatus.BAD_REQUEST);
        }
        const institutionData = await this.institutionService.create(createInstitution);
        if (!institutionData) {
            throw new common_1.NotFoundException('No institute found');
        }
        return response.status(common_1.HttpStatus.CREATED).json({
            message: 'Institute Created Successfully!',
            institutionData,
        });
    }
    async findAll(response) {
        const allInstitutionData = await this.institutionService.findAll();
        if (!allInstitutionData.length) {
            throw new common_1.NotFoundException('No institutions data found');
        }
        return response.status(common_1.HttpStatus.OK).json({
            message: 'Institutions fetched successfully',
            data: allInstitutionData,
        });
    }
    async findOne(response, id) {
        if (!(0, mongoose_1.isValidObjectId)(id)) {
            throw new common_1.BadRequestException('Invalid institute ID');
        }
        const institutionData = await this.institutionService.findOne(id);
        if (!institutionData) {
            throw new common_1.NotFoundException('No institute found');
        }
        return response.status(common_1.HttpStatus.OK).json({
            message: 'Institution fetched successfully',
            data: institutionData,
        });
    }
    async update(response, updateInstitution) {
        const institutionData = await this.institutionService.update(updateInstitution);
        if (!institutionData) {
            throw new common_1.NotFoundException('No institute found');
        }
        return response.status(common_1.HttpStatus.OK).json({
            message: 'Institute updated successfully',
            data: institutionData,
        });
    }
    async remove(response, id) {
        if (!(0, mongoose_1.isValidObjectId)(id)) {
            throw new common_1.HttpException('Invalid institute ID', common_1.HttpStatus.BAD_REQUEST);
        }
        const data = await this.institutionService.remove(id);
        if (!data) {
            return response.status(common_1.HttpStatus.NOT_FOUND).json({
                message: 'Institution not found',
            });
        }
        return response.status(common_1.HttpStatus.OK).json({
            message: 'Institution Deleted Successfully!',
        });
    }
};
__decorate([
    (0, dist_1.ApiCreatedResponse)({
        description: 'Institute Created Successfully!',
        type: institution_entites_1.InstituteEntity,
        isArray: false,
    }),
    (0, dist_1.ApiBadRequestResponse)({
        description: 'Invalid request body ',
        type: error_entities_1.ErrorEntity,
    }),
    (0, common_1.Post)('create-institution'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)(new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_institution_dto_1.CreateInstitutionDto]),
    __metadata("design:returntype", Promise)
], InstitutionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('get-institutions'),
    (0, dist_1.ApiOkResponse)({
        description: 'Institutions fetched successfullyn',
    }),
    (0, dist_1.ApiNotFoundResponse)({
        description: 'No institutions data Found',
    }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InstitutionController.prototype, "findAll", null);
__decorate([
    (0, dist_1.ApiOkResponse)({
        description: 'Institution fetched successfully',
        type: institution_entites_1.InstituteEntity,
    }),
    (0, dist_1.ApiNotFoundResponse)({
        description: 'No institutions data Found',
    }),
    (0, dist_1.ApiBadRequestResponse)({
        description: 'Invalid institute ID',
    }),
    (0, common_1.Get)('get-institution/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id', new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], InstitutionController.prototype, "findOne", null);
__decorate([
    (0, dist_1.ApiOkResponse)({
        description: 'Institute updated successfully',
        type: institution_entites_1.InstituteEntity,
    }),
    (0, dist_1.ApiBadRequestResponse)({
        description: 'Bad Request',
        type: update_error_entities_1.UpdateEntity,
    }),
    (0, dist_1.ApiNotFoundResponse)({
        description: 'No institute found with given Id',
    }),
    (0, common_1.Put)('update-institution'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)(new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_institution_dto_1.UpdateInstitutionDto]),
    __metadata("design:returntype", Promise)
], InstitutionController.prototype, "update", null);
__decorate([
    (0, dist_1.ApiOkResponse)({
        description: "Institution Deleted Successfully!"
    }),
    (0, dist_1.ApiBadRequestResponse)({
        description: "Invalid institute ID"
    }),
    (0, dist_1.ApiNotFoundResponse)({
        description: "Institution not found"
    }),
    (0, common_1.Delete)('delete-institution/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id', new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], InstitutionController.prototype, "remove", null);
exports.InstitutionController = InstitutionController = __decorate([
    (0, dist_1.ApiTags)('Institution'),
    (0, common_1.Controller)('/api/v1/institution'),
    __metadata("design:paramtypes", [institution_service_1.InstitutionService])
], InstitutionController);
//# sourceMappingURL=institution.controller.js.map
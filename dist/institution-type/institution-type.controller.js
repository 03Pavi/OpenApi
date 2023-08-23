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
exports.InstitutionTypeController = void 0;
const common_1 = require("@nestjs/common");
const institution_type_service_1 = require("./institution-type.service");
const create_institution_type_dto_1 = require("./dto/create-institution-type.dto");
const mongoose_1 = require("mongoose");
const update_institution_type_dto_1 = require("./dto/update-institution-type.dto");
const dist_1 = require("@nestjs/swagger/dist");
const Error_entities_1 = require("../entities/Type/Error.entities");
const institution_type_enitities_1 = require("../entities/Type/institution-type.enitities");
const update_1 = require("../entities/Type/update");
const update_error_entities_1 = require("../entities/Type/update-error.entities");
let InstitutionTypeController = exports.InstitutionTypeController = class InstitutionTypeController {
    constructor(institutionTypeService) {
        this.institutionTypeService = institutionTypeService;
    }
    async create(response, createInstitutionType) {
        const newInstitution = await this.institutionTypeService.create(createInstitutionType);
        if (!newInstitution) {
            throw new common_1.HttpException('Invalid request body', common_1.HttpStatus.BAD_REQUEST);
        }
        return response.status(common_1.HttpStatus.CREATED).json({
            success: true,
            message: 'Institute type Created Successfully!',
            newInstitution,
        });
    }
    async findAll(response) {
        const institutionsData = await this.institutionTypeService.findAll();
        if (!institutionsData || institutionsData.length == 0) {
            throw new common_1.NotFoundException('No institutions found');
        }
        return response.status(common_1.HttpStatus.OK).json({
            success: true,
            message: 'Institution type data',
            institutionsData,
        });
    }
    async findOne(response, id) {
        if (!(0, mongoose_1.isValidObjectId)(id)) {
            throw new common_1.BadRequestException('Invalid institute ID');
        }
        const institutionData = await this.institutionTypeService.findOne(id);
        if (!institutionData) {
            throw new common_1.NotFoundException('No institute found');
        }
        return response.status(common_1.HttpStatus.OK).json({
            message: 'Institution fetched successfully',
            data: institutionData,
        });
    }
    async update(response, updateInstitutionType) {
        const institutionTypeData = await this.institutionTypeService.update(updateInstitutionType);
        if (!institutionTypeData) {
            throw new common_1.NotFoundException('No institute-type found');
        }
        return response.status(common_1.HttpStatus.OK).json({
            message: 'Institute-type updated successfully',
            data: institutionTypeData,
        });
    }
    async remove(response, id) {
        if (!(0, mongoose_1.isValidObjectId)(id)) {
            throw new common_1.BadRequestException('Invalid institute ID');
        }
        const data = await this.institutionTypeService.remove(id);
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
        type: institution_type_enitities_1.InstituteTypeEntity,
        description: 'Institute-type Created Successfully!',
    }),
    (0, dist_1.ApiBadRequestResponse)({
        description: 'Bad Request',
        type: Error_entities_1.ErrorEntity,
    }),
    (0, common_1.Post)('create-institution-type'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)(new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_institution_type_dto_1.CreateInstitutionTypeDto]),
    __metadata("design:returntype", Promise)
], InstitutionTypeController.prototype, "create", null);
__decorate([
    (0, dist_1.ApiNotFoundResponse)({
        description: 'No institutions found',
    }),
    (0, dist_1.ApiOkResponse)({
        description: 'Successfully fetched Institution-type data',
    }),
    (0, common_1.Get)('get-institution-types'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InstitutionTypeController.prototype, "findAll", null);
__decorate([
    (0, dist_1.ApiBadRequestResponse)({
        description: 'Invalid institute ID',
    }),
    (0, dist_1.ApiNotFoundResponse)({
        description: 'No institute found',
    }),
    (0, dist_1.ApiOkResponse)({
        description: 'Institution fetched successfully',
        type: institution_type_enitities_1.InstituteTypeEntity,
    }),
    (0, common_1.Get)('get-institution-type/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id', new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], InstitutionTypeController.prototype, "findOne", null);
__decorate([
    (0, dist_1.ApiOkResponse)({
        description: 'Institute-type updated successfully',
        type: update_1.Update,
    }),
    (0, dist_1.ApiNotFoundResponse)({
        description: 'No institute-type found',
    }),
    (0, dist_1.ApiBadRequestResponse)({
        type: update_error_entities_1.UpdateErrorEntity
    }),
    (0, common_1.Put)('update-institution-type'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)(new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_institution_type_dto_1.UpdateInstitutionTypeDto]),
    __metadata("design:returntype", Promise)
], InstitutionTypeController.prototype, "update", null);
__decorate([
    (0, dist_1.ApiNotFoundResponse)({
        description: 'Institution not found',
    }),
    (0, dist_1.ApiBadRequestResponse)({
        description: 'Invalid institute ID',
    }),
    (0, dist_1.ApiOkResponse)({
        description: 'Institution Deleted Successfully!',
    }),
    (0, common_1.Delete)('delete-institution-type/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id', new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], InstitutionTypeController.prototype, "remove", null);
exports.InstitutionTypeController = InstitutionTypeController = __decorate([
    (0, dist_1.ApiTags)('Institution-type'),
    (0, common_1.Controller)('/api/v1/institution-type'),
    __metadata("design:paramtypes", [institution_type_service_1.InstitutionTypeService])
], InstitutionTypeController);
//# sourceMappingURL=institution-type.controller.js.map
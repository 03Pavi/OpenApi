"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstitutionTypeModule = void 0;
const common_1 = require("@nestjs/common");
const institution_type_service_1 = require("./institution-type.service");
const institution_type_controller_1 = require("./institution-type.controller");
const mongoose_1 = require("@nestjs/mongoose");
const institutionType_schema_1 = require("../schema/institutionType.schema");
let InstitutionTypeModule = exports.InstitutionTypeModule = class InstitutionTypeModule {
};
exports.InstitutionTypeModule = InstitutionTypeModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: institutionType_schema_1.InstitutionType.name, schema: institutionType_schema_1.InstitutionTypeSchema }])],
        controllers: [institution_type_controller_1.InstitutionTypeController],
        providers: [institution_type_service_1.InstitutionTypeService],
    })
], InstitutionTypeModule);
//# sourceMappingURL=institution-type.module.js.map
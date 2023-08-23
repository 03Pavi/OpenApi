"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Update = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_institution_type_dto_1 = require("../../institution-type/dto/create-institution-type.dto");
const UpdateInstitutionType_enitiites_1 = require("./UpdateInstitutionType.enitiites");
class Update extends (0, swagger_1.IntersectionType)(create_institution_type_dto_1.CreateInstitutionTypeDto, UpdateInstitutionType_enitiites_1.UpdateInstitutionType) {
}
exports.Update = Update;
//# sourceMappingURL=update.js.map
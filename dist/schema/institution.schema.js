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
exports.InstitutionSchema = exports.Institution = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const institutionType_schema_1 = require("./institutionType.schema");
let Institution = exports.Institution = class Institution {
};
__decorate([
    (0, mongoose_2.Prop)({ required: true }),
    __metadata("design:type", String)
], Institution.prototype, "name", void 0);
__decorate([
    (0, mongoose_2.Prop)({}),
    __metadata("design:type", String)
], Institution.prototype, "logoUrl", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose_1.Schema.Types.ObjectId, ref: 'InstitutionType', required: true }),
    __metadata("design:type", institutionType_schema_1.InstitutionType)
], Institution.prototype, "type", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: true }),
    __metadata("design:type", String)
], Institution.prototype, "office", void 0);
__decorate([
    (0, mongoose_2.Prop)({}),
    __metadata("design:type", String)
], Institution.prototype, "instituteTags", void 0);
__decorate([
    (0, mongoose_2.Prop)({}),
    __metadata("design:type", String)
], Institution.prototype, "comments", void 0);
__decorate([
    (0, mongoose_2.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], Institution.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_2.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], Institution.prototype, "updatedAt", void 0);
exports.Institution = Institution = __decorate([
    (0, mongoose_2.Schema)()
], Institution);
exports.InstitutionSchema = mongoose_2.SchemaFactory.createForClass(Institution);
//# sourceMappingURL=institution.schema.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const institution_module_1 = require("./institution/institution.module");
const mongoose_1 = require("@nestjs/mongoose");
const institution_type_module_1 = require("./institution-type/institution-type.module");
const dotenv = require("dotenv");
dotenv.config();
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [institution_module_1.InstitutionModule, mongoose_1.MongooseModule.forRoot('mongodb+srv://pavi:pavi@cluster0.ghnljc9.mongodb.net/newServer'), institution_type_module_1.InstitutionTypeModule],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
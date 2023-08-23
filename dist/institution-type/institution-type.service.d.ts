/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateInstitutionTypeDto } from './dto/create-institution-type.dto';
import { UpdateInstitutionTypeDto } from './dto/update-institution-type.dto';
import { Model } from 'mongoose';
import { InstitutionType } from '../schema/institutionType.schema';
export declare class InstitutionTypeService {
    private InstitutionTypeModel;
    constructor(InstitutionTypeModel: Model<InstitutionType>);
    create(createInstitutionType: CreateInstitutionTypeDto): Promise<InstitutionType>;
    findAll(): Promise<InstitutionType[]>;
    findOne(id: string): Promise<InstitutionType>;
    update(updateInstitutionTypeDto: UpdateInstitutionTypeDto): Promise<import("mongoose").Document<unknown, {}, InstitutionType> & InstitutionType & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<InstitutionType | null>;
}

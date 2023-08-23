import { InstitutionTypeService } from './institution-type.service';
import { CreateInstitutionTypeDto } from './dto/create-institution-type.dto';
import { Response } from 'express';
import { UpdateInstitutionTypeDto } from './dto/update-institution-type.dto';
export declare class InstitutionTypeController {
    private readonly institutionTypeService;
    constructor(institutionTypeService: InstitutionTypeService);
    create(response: Response, createInstitutionType: CreateInstitutionTypeDto): Promise<Response<any, Record<string, any>>>;
    findAll(response: Response): Promise<Response<any, Record<string, any>>>;
    findOne(response: Response, id: string): Promise<Response<any, Record<string, any>>>;
    update(response: Response, updateInstitutionType: UpdateInstitutionTypeDto): Promise<Response<any, Record<string, any>>>;
    remove(response: Response, id: string): Promise<Response<any, Record<string, any>>>;
}

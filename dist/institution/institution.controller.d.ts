import { InstitutionService } from './institution.service';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { Response } from 'express';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
export declare class InstitutionController {
    private readonly institutionService;
    constructor(institutionService: InstitutionService);
    create(response: Response, createInstitution: CreateInstitutionDto): Promise<Response<any, Record<string, any>>>;
    findAll(response: Response): Promise<Response<any, Record<string, any>>>;
    findOne(response: Response, id: string): Promise<Response<any, Record<string, any>>>;
    update(response: Response, updateInstitution: UpdateInstitutionDto): Promise<Response<any, Record<string, any>>>;
    remove(response: Response, id: string): Promise<Response<any, Record<string, any>>>;
}

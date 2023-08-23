import { CreateInstitutionDto } from './create-institution.dto';
declare const UpdateInstitutionDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateInstitutionDto>>;
export declare class UpdateInstitutionDto extends UpdateInstitutionDto_base {
    id: string;
    name: string;
    logoUrl?: string;
    type: string;
    office: string;
    instituteTags?: string;
    comments?: string;
}
export {};

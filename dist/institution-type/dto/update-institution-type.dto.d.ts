import { CreateInstitutionTypeDto } from './create-institution-type.dto';
declare const UpdateInstitutionTypeDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateInstitutionTypeDto>>;
export declare class UpdateInstitutionTypeDto extends UpdateInstitutionTypeDto_base {
    id: string;
    name: string;
    abbreviation: string;
}
export {};

import { IntersectionType } from "@nestjs/swagger";
import { CreateInstitutionTypeDto } from "src/institution-type/dto/create-institution-type.dto";
import { UpdateInstitutionType } from "./UpdateInstitutionType.enitiites";

export class Update extends IntersectionType(
    CreateInstitutionTypeDto,
    UpdateInstitutionType,
  ) {}
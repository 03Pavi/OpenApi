import { PartialType } from '@nestjs/mapped-types';
import { CreateInstitutionTypeDto } from './create-institution-type.dto';
import { IsMongoId, IsNotEmpty,IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateInstitutionTypeDto extends PartialType(
  CreateInstitutionTypeDto,
) {
  @ApiProperty()
  @IsNotEmpty()
  @IsMongoId()
  id: string;


  @ApiProperty()
  @IsNotEmpty()
  @IsOptional() // Allow the name and abbreviation to be optional when updating
  name: string;
  @ApiProperty()
  @IsOptional() // Allow the name and abbreviation to be optional when updating
  abbreviation: string;
}

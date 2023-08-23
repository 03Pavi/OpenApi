import { IsMongoId, IsNotEmpty, IsOptional } from 'class-validator';
import { CreateInstitutionDto } from './create-institution.dto';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateInstitutionDto extends PartialType(CreateInstitutionDto) {
  @ApiProperty()
  @IsNotEmpty()
  @IsMongoId()
  id: string;

  @ApiProperty({})
  @IsOptional()
  name: string;

  // -------

  @ApiProperty({
    description: 'The logo-url of institution',
    required: true,
    // example: 'https://www.dummy-url.co.in',
  })
  @IsOptional()
  logoUrl?: string;

  // -------

  @ApiProperty({
    description: 'The Type of institution',
    required: true,
    example: '64e43f834a3f4f9134a835a2',
  })
  @IsOptional()
  @IsMongoId()
  type: string;

  // -------

  @ApiProperty({
    description: 'The Office related to institution',
    // example: 'Office 1',
  })
  @IsOptional()
  office: string;

  // -------

  @ApiProperty({
    description: 'The tags for institution',
    // example: 'Tag 1, tag 2',
  })
  @IsOptional()
  instituteTags?: string;

  // -------

  @ApiProperty({
    description: 'The comments for institution',
    // example: 'comments',
  })
  @IsOptional()
  comments?: string;
}

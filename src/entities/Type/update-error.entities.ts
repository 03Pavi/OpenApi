import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ErrorEntity, arrayStrings } from './Error.entities';
const arrayString = [
  ...arrayStrings,
  'id must be a mongodb id',
  'id should not be empty',
];
@Entity('Error') // Specify the name of the database table
export class UpdateErrorEntity extends ErrorEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    description: 'Id',
    example: arrayString,
  })
  message: [string];
}

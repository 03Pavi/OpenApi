import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
export const arrayStrings = [
  'name should not be empty',
  'Abbreviation must be between 1 and 4 characters long',
  'Abbreviation must contain only alphabetic character',
];
@Entity('Error') // Specify the name of the database table
export class ErrorEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    description: 'Array of errors',
    example: arrayStrings,
  })
  message: [string];

  @ApiProperty({
    example: 'Bad Request',
  })
  @Column()
  error: string;

  @ApiProperty({ example: 400 })
  @Column()
  statusCode: number;
}

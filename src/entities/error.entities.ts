import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
export const arrayStrings = [
  'name must be a string',
  'logoUrl must be a string',
  'type must be a mongodb id',
  'type should not be empty',
  'office should not be empty',
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

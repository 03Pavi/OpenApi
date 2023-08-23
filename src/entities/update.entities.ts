import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('update-type') // Specify the name of the database table
export class UpdateEntityId {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    description: 'Id',
  })
  _id: string;
}

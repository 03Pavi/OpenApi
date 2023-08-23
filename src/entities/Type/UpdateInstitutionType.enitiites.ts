import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('institutes-type') // Specify the name of the database table
export class UpdateInstitutionType {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  _id: string;
  @ApiProperty()

  @Column()
  name: string;

  @ApiProperty()
  @Column()
  abbreviation: string;

  @ApiProperty()
  @Column()
  createdAt: Date;

  @ApiProperty()
  @Column()
  updatedAt: Date;

  @ApiProperty()
  @Column()
  __v: number;
}

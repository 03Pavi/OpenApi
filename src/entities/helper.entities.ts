import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('institutes-type') // Specify the name of the database table
export class Helper{
  @PrimaryGeneratedColumn()
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

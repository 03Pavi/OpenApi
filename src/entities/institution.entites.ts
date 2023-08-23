import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { UpdateEntityId } from './update.entities';

@Entity('institutes') // Specify the name of the database table
export class InstituteEntity extends UpdateEntityId {
  @PrimaryGeneratedColumn()

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  logoUrl: string;

  @ApiProperty({ example: '64e43f834a3f4f9134a835a2' })
  @Column()
  type: string; // You might need to replace this with the appropriate type

  @ApiProperty()
  @Column()
  office: string;

  @ApiProperty()
  @Column()
  instituteTags: string;

  @ApiProperty()
  @Column()
  comments: string;
}

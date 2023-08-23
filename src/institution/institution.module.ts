import { Module } from '@nestjs/common';
import { InstitutionService } from './institution.service';
import { InstitutionController } from './institution.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Institution, InstitutionSchema } from 'src/schema/institution.schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: Institution.name, schema: InstitutionSchema }])],
  controllers: [InstitutionController],
  providers: [InstitutionService],
})
export class InstitutionModule {}

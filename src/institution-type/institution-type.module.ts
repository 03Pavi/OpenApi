import { Module } from '@nestjs/common';
import { InstitutionTypeService } from './institution-type.service';
import { InstitutionTypeController } from './institution-type.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { InstitutionType, InstitutionTypeSchema } from 'src/schema/institutionType.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:InstitutionType.name,schema:InstitutionTypeSchema}])],
  controllers: [InstitutionTypeController],
  providers: [InstitutionTypeService],
})
export class InstitutionTypeModule {}

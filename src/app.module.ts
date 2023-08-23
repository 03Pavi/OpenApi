import { Module } from '@nestjs/common';
import { InstitutionModule } from './institution/institution.module';
import { MongooseModule } from '@nestjs/mongoose';
import { InstitutionTypeModule } from './institution-type/institution-type.module';
import * as dotenv from 'dotenv';

dotenv.config();
@Module({
  imports: [InstitutionModule, MongooseModule.forRoot('mongodb+srv://pavi:pavi@cluster0.ghnljc9.mongodb.net/newServer'), InstitutionTypeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

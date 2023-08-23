/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
import { Institution } from 'src/schema/institution.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { ObjectId } from 'mongoose';

@Injectable()
export class InstitutionService {

  constructor(
    @InjectModel(Institution.name)
    private readonly InstitutionModel: Model<Institution>,
  ) { }

  async create(createInstitution: CreateInstitutionDto): Promise<Institution> {
    try {
      const newInstitute = new this.InstitutionModel(createInstitution);
      return newInstitute.save();
    } catch (err) {
      throw new Error('Failed to create institution');
    }
  }

  findAll(): Promise<Institution[]> {
    return this.InstitutionModel.find();
  }

  findOne(id: string): Promise<Institution> {
    return this.InstitutionModel.findById(id);
  }

  async update(updateInstitution: UpdateInstitutionDto) {
    const { id, ...updateData } = updateInstitution;

    try {
      const instituteData = await this.InstitutionModel.findByIdAndUpdate(
        id,
        updateData,
        { new: true }
      );

      return instituteData;
    } catch (err) {
      throw new Error('Failed to update institution');
    }
  }

  remove(id: string):Promise<Institution> {
    try {
      return this.InstitutionModel.findByIdAndDelete(id)
    } catch (err) {
      throw new Error('Failed to delete institution');
    }
  }

}

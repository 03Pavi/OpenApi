import { Injectable } from '@nestjs/common';
import { CreateInstitutionTypeDto } from './dto/create-institution-type.dto';
import { UpdateInstitutionTypeDto } from './dto/update-institution-type.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InstitutionType } from '../schema/institutionType.schema';

@Injectable()
export class InstitutionTypeService {
  constructor(@InjectModel(InstitutionType.name) private InstitutionTypeModel: Model<InstitutionType>) { }

  async create(createInstitutionType: CreateInstitutionTypeDto):Promise<InstitutionType> {
    try {
      const newInstitutionType = new this.InstitutionTypeModel(createInstitutionType)
      return newInstitutionType.save();
    } catch (err) {
      throw new Error('Failed to create institution-type');
    }
  }

  findAll(): Promise<InstitutionType[]> {
    return this.InstitutionTypeModel.find();
  }

  findOne(id: string): Promise<InstitutionType> {
    return this.InstitutionTypeModel.findById(id);
  }

  async update(updateInstitutionTypeDto: UpdateInstitutionTypeDto) {
    const { id, ...updateData }  = updateInstitutionTypeDto;
    try {
      const instituteTypeData = await this.InstitutionTypeModel.findByIdAndUpdate(id, updateData, { new: true })
      return instituteTypeData;
    } catch (err) {
      throw new Error('Failed to update institution-type');
    }
  }

  async remove(id: string):Promise<InstitutionType | null> {
    try {
      return this.InstitutionTypeModel.findByIdAndDelete(id)
    } catch (err) {
      throw new Error('Failed to delete institution-type');
    }
  }

}

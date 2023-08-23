import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class InstitutionType {
    @Prop({ required: true })
    name: string

    @Prop({ required: true })
    abbreviation: string

    @Prop({ default: Date.now })
    createdAt: Date;

    @Prop({ default: Date.now })
    updatedAt: Date;
}

export type InstitutionTypeDocument = InstitutionType & Document;
export const InstitutionTypeSchema = SchemaFactory.createForClass(InstitutionType)
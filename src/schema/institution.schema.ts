import { Document, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { InstitutionType } from './institutionType.schema';

@Schema()
export class Institution {
   @Prop({ required: true })
   name: string;

   @Prop({})
   logoUrl: string;

   @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'InstitutionType', required: true })
   type: InstitutionType;

   @Prop({ required: true })
   office: string;

   @Prop({})
   instituteTags: string;

   @Prop({})
   comments: string;

   @Prop({ default: Date.now })
   createdAt: Date;

   @Prop({ default: Date.now })
   updatedAt: Date;
}

export type InstitutionDocument = Institution & Document;
export const InstitutionSchema = SchemaFactory.createForClass(Institution);
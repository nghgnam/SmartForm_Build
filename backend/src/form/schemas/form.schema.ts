import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class FormField {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  label: string;

  @Prop()
  placeholder?: string;

  @Prop({ required: true, default: false })
  required: boolean;

  @Prop({ type: [{ label: String, value: MongooseSchema.Types.Mixed }] })
  options?: Array<{ label: string; value: any }>;

  @Prop({ type: Object })
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string;
  };
}

@Schema({ timestamps: true })
export class Form extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ type: [FormField], required: true })
  fields: FormField[];

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  creator: MongooseSchema.Types.ObjectId;
}

export const FormSchema = SchemaFactory.createForClass(Form); 
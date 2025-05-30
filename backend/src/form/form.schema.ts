import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { HydrateOptions } from 'mongoose';
import { IsString, IsObject, IsArray} from 'class-validator'
@Schema({
    timestamps: true
})
export class Form extends Document {
    @IsString()
    @Prop({ required: true })
    title: string;
    
    @IsString()
    @Prop()
    description?: string;

    @IsArray()
    @Prop({ type: [Object], default: [] })
    fields: any[];
}

export const FormSchema = SchemaFactory.createForClass(Form);

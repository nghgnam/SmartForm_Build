import { Prop, Schema } from "@nestjs/mongoose";
import { IsEmail, IsString, Length } from 'class-validator'
@Schema()

export class User extends Document {
    @IsEmail()
    @Prop()
    email: string;

    @IsString()
    @Length(8, 50)
    username: string;

    @IsString()
    @Length(6, 20)
    @Prop()
    password: string;
}
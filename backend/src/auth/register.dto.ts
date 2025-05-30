import { Prop } from '@nestjs/mongoose'
import { IsString, IsEmail, Length} from 'class-validator'

export class RegisterDto {
    @IsString()
    @Prop({ required: true})
    @IsEmail()
    email: string;

    @IsString()
    @Prop({required: true})
    @Length(8, 50)
    username: string;

    @IsString()
    @Prop({required: true})
    @Length(6, 20)
    password: string
}
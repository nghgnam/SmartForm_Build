
import { IsString , IsArray, IsOptional} from 'class-validator';

export class CreateFormDto {
    @IsString()
    readonly title: string;

    @IsString()
    readonly descriptions?: string;

    @IsArray()
    readonly fields: any[];
}


export class UpdateFormDto {
    @IsString()
    @IsOptional()
    title: string;

    @IsOptional()
    @IsString()
    descriptions?: string;

    @IsOptional()
    @IsArray()
    fields: any[];
}

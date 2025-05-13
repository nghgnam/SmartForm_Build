import { FormField } from "./form-fields.model";
import { FieldType } from "./field-type.enum";
import { ValidatorFn } from "@angular/forms";

export class NumberField extends FormField<number>{
    constructor(
        key: string,
        label: string,
        value: number,
        required = false,
        placeholder: string, 
        public min?: number,
        public max?: number
    ){
        super(key, label, value, required, placeholder)
    }

    override get type(): FieldType{
        return FieldType.NUMBER
    }

    override get placeholderType(): string{
        return "Nhập đúng kiểu số";
    }

    override get validators(): ValidatorFn{
        const v = super.v
    }



}
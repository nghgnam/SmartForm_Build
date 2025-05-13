import { FormField } from "./form-fields.model";
import { FieldType } from "./field-type.enum";

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
        super()
    }


}
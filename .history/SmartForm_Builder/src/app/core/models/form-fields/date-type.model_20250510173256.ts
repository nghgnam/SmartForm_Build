import { FieldType } from "./field-type.enum"
import { FormField } from "./form-fields.model"
export class DateType extends FormField<string>{
    constructor(
        key: string,
        label: string,
        value: string,
        required = false,
        placeholder: string,
        public minDatee: 
    )
    {}
} 
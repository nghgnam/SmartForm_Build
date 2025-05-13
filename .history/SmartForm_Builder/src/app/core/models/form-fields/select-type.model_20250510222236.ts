import { FormField } from "./form-fields.model";
import { FieldType } from "./field-type.enum";

export class SelectType extends FormField<string>{
    constructor
    (
        key: string,
        label: string,
        value: string,
        required: false,
        placeholder?: string,
        public options: { label: string, value: string[] }
    )
    {

    }
}
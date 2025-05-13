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
        public options: { label: string, value: string }[] = [],
    )
    {
        super(key, label, value, required, placeholder)
    }

    override get type(): string{
        return FieldType.SELECT;
    }
    
}
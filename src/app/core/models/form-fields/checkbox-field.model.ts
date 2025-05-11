import { FormField } from "./form-fields.model";
import { FieldType } from "./field-type.enum";

export class CheckboxType extends FormField<string>{
    constructor
    (
        key: string,
        label: string,
        value: string,
        required: false,
        placeholder?: string,
        public override options: { label: string, value: string }[] = [],
    )
    {
        super(key, label, value, required, placeholder)
    }

    override get type(): FieldType{
        return FieldType.CHECKBOX;
    }

}
import { FormField } from "./form-fields.model";
import { FieldType } from "./field-type.enum";

export class RadioType extends FormField<string>{
    constructor
    (
        key: string,
        label: string,
        value: string,
        required: false,
        public maxLength?: number,
    )
    {
        super(key, label, value, required)
    }

    override get type(): FieldType{
        return FieldType.SELECT;
    }

}
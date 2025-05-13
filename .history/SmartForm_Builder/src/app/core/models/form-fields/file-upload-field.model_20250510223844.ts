import { FormField } from "./form-fields.model";
import { FieldType } from "./field-type.enum";

export class FileUploadType extends FormField<string>{
    constructor
    (
        key: string,
        label: string,
        value: string,
        required: false,
        placeholder?: string,
        public acceptType: 
    )
    {
        super(key, label, value, required, placeholder)
    }

    override get type(): FieldType{
        return FieldType.SELECT;
    }

}
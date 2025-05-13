import { FieldType } from "./field-type.enum";
import { FormField } from "./form-fields.model";

export class TextField extends FormField<string> {
    override get type(): FieldType{
        return FieldType.TEXT;
    }
}
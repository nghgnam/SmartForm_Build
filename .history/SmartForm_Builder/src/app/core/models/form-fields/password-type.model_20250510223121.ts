import { FormField } from "./form-fields.model";
import { FieldType } from "./field-type.enum";

export class PasswordType extends FormField<string>{
    override get type(): FieldType{
        return FieldType.SELECT;
    }

    override get 

}
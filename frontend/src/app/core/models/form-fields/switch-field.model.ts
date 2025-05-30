import { FormField } from "./form-fields.model";
import { FieldType } from "./field-type.enum";

export class SwitchType extends FormField<string>{
    override get type(): FieldType{
        return FieldType.SWTICH;
    }

}
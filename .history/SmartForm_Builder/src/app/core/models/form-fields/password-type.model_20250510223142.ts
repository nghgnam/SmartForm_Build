import { FormField } from "./form-fields.model";
import { FieldType } from "./field-type.enum";
import { ValidatorFn } from "@angular/forms";

export class PasswordType extends FormField<string>{
    override get type(): FieldType{
        return FieldType.SELECT;
    }

    override get validators(): ValidatorFn[]{
        const v = super.validators;
        return v 
    }

}
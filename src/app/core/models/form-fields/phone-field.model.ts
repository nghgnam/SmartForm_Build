import { FormField } from "./form-fields.model";
import { FieldType } from "./field-type.enum";
import { ValidatorFn } from "@angular/forms";

export class PhoneType extends FormField<string>{
    override get type(): FieldType{
        return FieldType.PHONE;
    }

    override get validators(): ValidatorFn[]{
        return super.validators
    }

}
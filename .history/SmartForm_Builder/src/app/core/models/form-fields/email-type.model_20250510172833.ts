import { FieldType } from "./field-type.enum";
import { FormField } from "./form-fields.model";
import { ValidatorFn, Validators } from "@angular/forms";
export class EmailType extends FormField<string>{
    override get type(): FieldType{
        return FieldType.EMAIL;
    }
    override get placeholderType(): string{
        return "Nhập đầy đủ mail";
    }
    override get validators(): ValidatorFn[]{
        const base = super.validators;
        return [...base, Validators.email]
    }
}
import { FieldType } from "./field-type.enum"
import { FormField } from "./form-fields.model"
import { ValidatorFn, Validators } from "@angular/forms";
export class DateType extends FormField<string>{
    constructor(
        key: string,
        label: string,
        value: string,
        required = false,
        placeholder: string,
        public minDate?: string,
        public maxDate?: string
    )
    {
        super(key, label, value, required, placeholder);
    }

    override get type(): FieldType{
        return FieldType.DATE;
    }

    override get validators(): ValidatorFn[]{
        const value = super.validators;

        return value;
    }


} 
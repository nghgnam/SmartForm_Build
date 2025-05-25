import { FieldType } from "./field-type.enum"
import { FormField, FieldProperties } from "./form-fields.model"
import { ValidatorFn, Validators } from "@angular/forms";

export interface DateFieldProperties extends FieldProperties {
    minDate?: string;
    maxDate?: string;
}

export class DateType extends FormField<string>{
    constructor(
        key: string,
        label: string,
        value: string,
        required = false,
        placeholder?: string,
        properties?: DateFieldProperties
    )
    {
        super(key, label, value, required, placeholder, properties);
    }

    override get type(): FieldType{
        return FieldType.DATE;
    }

    override get validators(): ValidatorFn[]{
        const validators = super.validators;
        const minDate = this.getProperty<string>('minDate');
        const maxDate = this.getProperty<string>('maxDate');

        if (minDate) {
            validators.push((control) => {
                const date = new Date(control.value);
                const min = new Date(minDate);
                return date < min ? { minDate: true } : null;
            });
        }

        if (maxDate) {
            validators.push((control) => {
                const date = new Date(control.value);
                const max = new Date(maxDate);
                return date > max ? { maxDate: true } : null;
            });
        }

        return validators;
    }

    // Convenience getters for date-specific properties
    get minDate(): string | undefined {
        return this.getProperty<string>('minDate');
    }

    get maxDate(): string | undefined {
        return this.getProperty<string>('maxDate');
    }
} 
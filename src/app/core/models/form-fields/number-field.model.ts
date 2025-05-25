import { FormField, FieldProperties } from "./form-fields.model";
import { FieldType } from "./field-type.enum";
import { ValidatorFn, Validators } from "@angular/forms";

export interface NumberFieldProperties extends FieldProperties {
    min?: number;
    max?: number;
}

export class NumberField extends FormField<number> {
    constructor(
        key: string,
        label: string,
        value: number,
        required = false,
        placeholder?: string,
        properties?: NumberFieldProperties
    ) {
        super(key, label, value, required, placeholder, properties);
    }

    override get type(): FieldType {
        return FieldType.NUMBER;
    }

    override get placeholderType(): string {
        return "Nhập đúng kiểu số";
    }

    override get validators(): ValidatorFn[] {
        const validators = super.validators;
        const min = this.getProperty<number>('min');
        const max = this.getProperty<number>('max');

        if (min !== undefined) validators.push(Validators.min(min));
        if (max !== undefined) validators.push(Validators.max(max));
        return validators;
    }

    // Convenience getters for number-specific properties
    get min(): number | undefined {
        return this.getProperty<number>('min');
    }

    get max(): number | undefined {
        return this.getProperty<number>('max');
    }
}
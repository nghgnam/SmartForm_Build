import { FormField } from "./form-fields.model";
import { FieldType } from "./field-type.enum";

export class NumberField extends FormField<number>{
    constructor(
        key: string,
        label: string,
        value: number,
        private require
    )
}
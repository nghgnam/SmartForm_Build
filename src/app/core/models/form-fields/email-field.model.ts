import { FieldType } from "./field-type.enum";
import { FormField } from "./form-fields.model";
import { Validators } from "@angular/forms";

export class EmailField extends FormField<string> {
  constructor(
    key: string,
    label: string,
    value: string,
    required: boolean = false,
    placeholder?: string
  ) {
    super(key, label, value, required, placeholder);
  }

  override get type(): FieldType {
    return FieldType.EMAIL;
  }

  override get validators() {
    const validators = super.validators;
    validators.push(Validators.email);
    return validators;
  }
}
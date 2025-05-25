import { FieldType } from "./field-type.enum";
import { FormField } from "./form-fields.model";
import { Validators } from "@angular/forms";

export class PasswordField extends FormField<string> {
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
    return FieldType.PASSWORD;
  }

  override get validators() {
    const validators = super.validators;
    validators.push(Validators.minLength(6));
    return validators;
  }
}
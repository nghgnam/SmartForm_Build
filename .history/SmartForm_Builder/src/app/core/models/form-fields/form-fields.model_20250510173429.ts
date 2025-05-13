import { FieldType } from "./field-type.enum";
import { ValidatorFn , Validators} from "@angular/forms"
export abstract class FormField<T> {
  constructor(
    private key: string,
    private label: string,
    private value: T,
    private required: boolean = false,
    private placeholder?: string
  ){}

  abstract get type(): FieldType;
  get placeholderType(): string;
  get validators(): ValidatorFn[]{
    return this.required ? [Validators.required]: []
  }

  toFormControl(): any{
    return {
      valua: this.value,
      disabled: false
    };
  }
}

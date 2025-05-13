import { FieldType } from "./field-type.enum";
import { ValidatorFn , Validators} from "@angular/forms"
export abstract class FormField<T> {

  constructor(
    public readonly key: string,
    public label: string,
    public value: T,
    public required: boolean = false,
    public placeholder?: string
  ){}

  abstract get type(): FieldType;
  get placeholderType(): string{
    return this.placeholder ? this.placeholder :"Default placehoder"
  };
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

import { FieldType } from "./field-type.enum";

export abstract class FormField<T> {
  constructor(
    private key: string,
    private label: string,
    private value: T,
    private required: boolean = false,
    private placeholder?: string
  ){}

  abstract get type(): FieldType;
  abstract get placeholderType(): string;
  abstract get validatord(): Valid

  toFormControl(): any{
    return {
      valua: this.value,
      disabled: false
    };
  }
}

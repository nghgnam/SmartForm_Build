import { FieldType } from "./field-type.enum";

export abstract class FormField<T> {
  constructor(
    private key: string,
    private label: string,
    private value: T,
    private required: boolean = false,
    private placeholder?: string
  ){}

  abstract class get type(): FieldType;

  toFormControl(): any{
    
  }
}

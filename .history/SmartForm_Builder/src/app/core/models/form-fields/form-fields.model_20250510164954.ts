import { FieldType } from "./field-type.enum";

export abstract class FormField<T> {
  constructor(
    private key: string,
    private label: string,
    
  ){}
}

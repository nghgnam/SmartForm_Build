import { FieldType } from "./field-type.enum";

export abstract class FormField {
  abstract type: string;
  abstract label: string;
  abstract value: any;
  abstract placeholder: string;
  abstract required: boolean;
}

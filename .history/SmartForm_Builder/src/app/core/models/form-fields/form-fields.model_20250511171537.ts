import { FieldType } from "./field-type.enum";
import { ValidatorFn, Validators } from "@angular/forms"

export interface FormFieldOption {
  label: string;
  value: string | number;
}

export interface FieldProperties {
  [key: string]: any;
}

export abstract class FormField<T> {
  protected fieldProperties?: FieldProperties;
options: any;

  constructor(
    public readonly key: string,
    public label: string,
    public value: T,
    public required: boolean = false,
    public placeholder?: string,
    properties?: FieldProperties
  ) {
    if (properties) {
      this.fieldProperties = { ...properties };
    }
  }

  abstract get type(): FieldType;
  
  get placeholderType(): string {
    return this.placeholder ? this.placeholder : "Hãy nhập thông tin";
  }

  get validators(): ValidatorFn[] {
    const validators: ValidatorFn[] = [];
    if (this.required) {
      validators.push(Validators.required);
    }
    return validators;
  }

  toFormControl(): any {
    return {
      value: this.value,
      disabled: false
    };
  }

  protected getProperty<K>(key: string): K | undefined {
    return this.fieldProperties?.[key] as K;
  }

  protected setProperty<K>(key: string, value: K): void {
    if (!this.fieldProperties) {
      this.fieldProperties = {};
    }
    this.fieldProperties[key] = value;
  }
}

export abstract class OptionField<T> extends FormField<T> {
  constructor(
    key: string,
    label: string,
    value: T,
    public override options: FormFieldOption[],
    required: boolean = false,
    placeholder?: string
  ) {
    super(key, label, value, required, placeholder);
  }
}

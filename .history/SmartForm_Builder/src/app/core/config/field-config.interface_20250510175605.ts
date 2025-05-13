export interface FieldConfig{
    label: string;
    inputType: string;
    hasOptions?: boolean;
    hasMinMax?: boolean;
    multiLine?: boolean;
    acceptFile?: boolean;
    defaultValidators: string[]; 
}
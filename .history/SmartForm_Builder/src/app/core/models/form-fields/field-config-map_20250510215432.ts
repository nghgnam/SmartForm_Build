import { FieldType } from "./field-type.enum";
import { FieldConfig } from "../../config/field-config.interface"

export const FieldConfigmap: Record<FieldType, FieldConfig> ={
    [FieldType.TEXT]:{
        label: 'Trường văn bản',
        inputType: 'text',
    },
    [FieldType.NUMBER]: {
        label: 'Số',
        inputType: 'number',
        hasMinMax: true,
    },
    [FieldType.EMAIL]: {
        label: 'Email',
        inputType: 'email',
        defaultValidators: ['email'],
    },
    [FieldType.PHONE]: {
        label: 'Số điện thoạithoại',
        inputType: 'tel',
        defaultValidators: ['phone']
    },
    [FieldType.PASSWORD]: {
        label: 'Password',
        inputType: 'password',
    },
    [FieldType.TEXTAREA]: {
        label: 'Đoạn văn',
        inputType: 'text',
        multiLine: true,
    },
    
}
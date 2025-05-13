import { FormField } from "./form-fields.model";
import { FieldType } from "./field-type.enum";

export class RatingType extends FormField<string>{
    constructor
    (
        key: string,
        label: string,
        value: string,
        required: false,
        public maxRating = 5
    )
    {
        super(key, label, value, required)
    }

    override get type(): FieldType{
        return FieldType.RATING;
    }

}
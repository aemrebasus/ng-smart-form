import { ValidatorFn, } from '@angular/forms';
import { IconType } from 'ng-icon-type';
import { InputType, InputAutocompleteType } from 'form-input-type';


export interface AeDynamicForm {
    formTitle?: string;
    formInputs: AeFormControl[];
    submitButton: { value: string, color: 'accent' | 'warn' | 'primary' };
}


export interface AeFormControl {
    name: string;
    type?: InputType;
    state?: string | number;
    validators?: ValidatorFn | ValidatorFn[];
    autocomplete?: InputAutocompleteType;
    placeholder?: string;
    label?: string;
    options?: string[];
    icon?: IconType;
}



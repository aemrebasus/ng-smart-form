import { ValidatorFn } from '@angular/forms';
import validator from 'validator';

export const aeValidators: { [key: string]: ValidatorFn } = {

    required: (control) => control.value === '' ? { required: 'Field is required!' } : null,
    email: (control) => validator.isEmail(control.value) ? null : { email: 'Input must be email!' },
};



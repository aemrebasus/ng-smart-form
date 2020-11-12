import { AeFormBuilder } from 'ae-dynamic-form';

export const DATE_RANGE_FORM_CODE = `
const form =  new AeFormBuilder().title('Select Date Range')
    .newControl('start')
    .type('date')
    .dateType('range')
    .buildFormControl()

    .buildForm();
`;

export const DATE_RANGE_FORM = new AeFormBuilder().title('Select Date Range')
    .newControl('start').type('date').dateType('range').buildFormControl()

    .buildForm();

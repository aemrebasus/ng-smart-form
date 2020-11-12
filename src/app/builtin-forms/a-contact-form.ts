import { AeFormBuilder } from 'projects/ae-dynamic-form/src/public-api';

export const CONTACT_FORM_CODE = `
const form = new AeFormBuilder().title('Contact Form')
    .newControl('firstName')
    .type('text')
    .label('First Name')
    .placeholder('Type First Name')
    .icon('person')
    .required()
    .buildFormControl()


    .newControl('lastName')
    .type('text')
    .label('Last Name')
    .placeholder('Type Last Name')
    .icon('person')
    .required()
    .buildFormControl()


    .newControl('email')
    .type('email')
    .label('Email')
    .placeholder('Email')
    .icon('email')
    .required()
    .buildFormControl()


    .newControl('note')
    .type('text-area')
    .label('Message')
    .placeholder('Type your message')
    .icon('message')
    .minLength(20)
    .buildFormControl()
    .buildForm();
`;

export const CONTACT_FORM = new AeFormBuilder().title('Contact Form')
    .newControl('firstName')
    .type('text')
    .label('First Name')
    .placeholder('Type First Name')
    .icon('person')
    .required()
    .buildFormControl()


    .newControl('lastName')
    .type('text')
    .label('Last Name')
    .placeholder('Type Last Name')
    .icon('person')
    .required()
    .buildFormControl()


    .newControl('email')
    .type('email')
    .label('Email')
    .placeholder('Email')
    .icon('email')
    .required()
    .buildFormControl()


    .newControl('note')
    .type('text-area')
    .label('Message')
    .placeholder('Type your message')
    .icon('message')
    .minLength(20)
    .buildFormControl()
    .buildForm();



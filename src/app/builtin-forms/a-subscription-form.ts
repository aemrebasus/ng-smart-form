import { AeFormBuilder } from 'projects/ae-dynamic-form/src/public-api';

export const SUBSCRIPTION_FORM_CODE = `
const form =  new AeFormBuilder().title('Contact Form')
    .newControl('firstName')
    .autocomplete('cc-name')
    .type('text')
    .label('First Name')
    .placeholder('Type First Name')
    .icon('person')
    .required()
    .buildFormControl()


    .newControl('lastName')
    .autocomplete('family-name')
    .type('text')
    .label('Last Name')
    .placeholder('Type Last Name')
    .icon('person')
    .required()
    .buildFormControl()

    .newControl('email')
    .email()
    .autocomplete('email')
    .type('email')
    .label('Email')
    .placeholder('Email')
    .icon('email')
    .required()
    .buildFormControl()

    .newControl('organization')
    .type('text')
    .label('Organization')
    .placeholder('Type Organization Name')
    .icon('build')
    .required()
    .buildFormControl()


    .newControl('password')
    .autocomplete('new-password')
    .type('password')
    .label('Password')
    .placeholder('Type Password')
    .icon('security')
    .required()
    .buildFormControl()

    .newControl('passwordAgain')
    .autocomplete('new-password')
    .type('password')
    .label('Password')
    .placeholder('Type Password')
    .icon('security')
    .required()
    .buildFormControl()


    .newControl('remember')
    .type('checkbox')
    .label('Remember me')
    .buildFormControl()

    .buildForm();
`;

export const SUBSCRIPTION_FORM = new AeFormBuilder()
  .title('Contact Form')
  .newControl('firstName')
  .autocomplete('cc-name')
  .type('text')
  .label('First Name')
  .placeholder('Type First Name')
  .icon('person')
  .required()
  .buildFormControl()

  .newControl('password')
  .autocomplete('new-password')
  .type('password')
  .label('Password')
  .required()
  .minLength(8)
  .placeholder('Type Password')
  .icon('security')
  .confirmation()
  .buildFormControl()

  .buildForm();

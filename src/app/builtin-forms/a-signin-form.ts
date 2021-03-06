import { AeFormBuilder } from 'projects/ae-dynamic-form/src/public-api';
export const SIGNIN_FORM_CODE = `
const form = new AeFormBuilder().title('Login Form')
    .newControl('username')
    .type('text')
    .label('Username')
    .placeholder('Type username')
    .autocomplete('username')
    .required()
    .maxLength(30)
    .icon('person')
    .buildFormControl()


    .newControl('password')
    .type('password')
    .label('Password')
    .placeholder('Password')
    .required()
    .minLength(6)
    .icon('security')
    .buildFormControl()

    .buildForm();
`;
export const SIGNIN_FORM = new AeFormBuilder()
  .title('Login Form')
  .newControl('username')
  .type('text')
  .label('Username')
  .placeholder('Type username')
  .autocomplete('username')
  .required()
  .maxLength(30)
  .icon('person', 'warn')
  .buildFormControl()

  .newControl('password')
  .type('password')
  .label('Password')
  .placeholder('Password')
  .required()
  .minLength(6)
  .icon('security', 'accent')
  .buildFormControl()

  .newControl('remember')
  .type('checkbox')
  .label('Remember me')
  .optional()
  .buildFormControl()

  .buildForm();

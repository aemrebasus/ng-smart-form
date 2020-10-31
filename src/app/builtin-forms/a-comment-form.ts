import { AeFormBuilder } from 'projects/ae-dynamic-form/src/public-api';


export const COMMENT_FORM = new AeFormBuilder().title('Comment')
    .newControl('comment')
    .type('text-area')
    .minLength(10)
    .maxLength(400)
    .placeholder('Type Comment')
    .icon('comment')
    .buildFormControl()

    .buildForm();

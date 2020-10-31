import { AeFormBuilder } from 'projects/ae-dynamic-form/src/public-api';

export const TASK_FORM = new AeFormBuilder()
    .newControl('title')
    .type('text')
    .label('Title')
    .placeholder('Type title')
    .icon('title')
    .required()
    .buildFormControl()

    .newControl('description')
    .type('text')
    .label('Description')
    .placeholder('Describe the task')
    .icon('description')
    .required()
    .buildFormControl()


    .newControl('assignee')
    .type('select')
    .label('Assignee')
    .options([
        { label: 'Ahmet Emreas', value: 'Ahmet Emrebas', icon: 'king_bed' },
        { label: 'Endy Bob', value: 'Endy Bob', icon: '6_ft_apart' },
        { label: 'Mary Jane', value: 'Mary Jane', icon: 'movie_creation' }
    ])
    .buildFormControl()

    .buildForm();


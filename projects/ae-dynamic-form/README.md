### Usage

#### Template 
````
 <ae-dynamic-form [input]="AeFormBuilder Instance"></ae-dynamic-form>

````

### Task Form 

````

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


````

### Subscription Form 

````

export const SUBSCRIPTION_FORM = new AeFormBuilder().title('Contact Form')
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


    .buildForm();

````



#### Login Form 

````
export const SIGNIN_FORM = new AeFormBuilder().title('Login Form')
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

````

#### Contact Form 

````
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

    ````


import { ValidatorFn } from '@angular/forms';
import { IconType } from 'ng-icon-type';
import { InputType, InputAutocompleteType } from 'form-input-type';
import validator from 'validator';


export interface InputOption {
    label?: string;
    value: string;
    icon?: IconType;
}

export type DateControlType = 'range' | 'basic';

// export type DateConstantRange =
//     | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15
//     | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31;


/**
 * @field name: string;
 * @field type?: InputType;
 * @field state?: string | number;
 * @field validators?: ValidatorFn | ValidatorFn[];
 * @field autocomplete?: InputAutocompleteType;
 * @field hint?: string;
 * @field placeholder?: string;
 * @field label?: string;
 * @field options?: string[];
 * @field icon?: IconType;
 * @field dateType?: DateControlType;
 * @field dateRange?: DateConstantRange;
 */
export interface AeFormControl {
    name: string;
    type?: InputType;
    dateType?: DateControlType;
    dateRange?: boolean;
    startDate?: Date;
    // dateConstantRange?: DateConstantRange;
    state?: string | number;
    validators?: ValidatorFn[];
    autocomplete?: InputAutocompleteType;
    hint?: string;
    placeholder?: string;
    label?: string;
    options?: InputOption[];
    range?: { min: number, max: number };
    icon?: IconType;
}



export interface AeDynamicForm {
    formTitle?: string;
    formInputs: AeFormControl[];
    submitButton?: { value: string, color: 'accent' | 'warn' | 'primary', action?: (value: { [key: string]: string }) => void };

}


/**
 * @description Build forms using builder methods.
 *
 * ```
 *
 *  @Input() input: AeDynamicForm = new AeFormBuilder()
 *                            .title('Form Title')
 *                              .newControl('firstName')
 *                              .placeholder('Type First Name')
 *                              .icon('360')
 *                              .label('First Name')
 *                              .required()
 *                              .max(10)
 *                              .min(3)
 *                              .buildFormControl()
 *                            .newControl('lastName')
 *                              .placeholder('Type Last Name')
 *                              .icon('perm_camera_mic')
 *                              .label('Last Name')
 *                              .buildFormControl()
 *                            .buildForm(); </pre>
 *
 * ```
 */
export class AeFormBuilder {

    /**
     *
     * @Sample AeFormBuilder sample.
     *
     * ```
     *
     *  @Input() input: AeDynamicForm = new AeFormBuilder()
     *                            .title('Form Title')
     *                              .newControl('firstName')
     *                              .placeholder('Type First Name')
     *                              .icon('360')
     *                              .label('First Name')
     *                              .required()
     *                              .max(10)
     *                              .min(3)
     *                              .buildFormControl()
     *                            .newControl('lastName')
     *                              .placeholder('Type Last Name')
     *                              .icon('perm_camera_mic')
     *                              .label('Last Name')
     *                              .buildFormControl()
     *                            .buildForm(); </pre>
     *
     * ```
     */
    constructor() { }










    /**
     * @description AeDynamicForm instance.
     */
    private dynamicForm: AeDynamicForm = {
        formTitle: 'Form Title',
        submitButton: { value: '', color: 'accent' },
        formInputs: []
    };

    /**
     * @description  FormControl holder to store each formControl before adding it to the formInputs in the dynamicForm.
     */
    private newFormControlHolder: AeFormControl;

    /**
     * @description set the title of the form.
     */
    public title(title?: string): AeFormBuilder {
        this.dynamicForm.formTitle = title;
        return this;
    }

    /**
     * @description set the value of submit button.
     */
    public submitButtonLabel(value: string): AeFormBuilder {
        this.dynamicForm.submitButton.value = value;
        return this;
    }

    /**
     * @description set the color of submit button.
     */
    public submitButtonColor(value: 'accent' | 'primary' | 'warn'): AeFormBuilder {
        this.dynamicForm.submitButton.color = value;
        return this;
    }

    /**
     * @description set the name of the current controller.
     */
    public newControl(name: string): AeFormBuilder {
        this.newFormControlHolder = { name, validators: [() => null], options: [] };
        return this;
    }

    /**
     * @description set the state of the controller.
     */
    public state(state: string): AeFormBuilder {
        this.newFormControlHolder = { ...this.newFormControlHolder, state };
        return this;
    }

    /**
     * @description set the type of the controller.
     */
    public type(type: InputType): AeFormBuilder {
        this.newFormControlHolder = { ...this.newFormControlHolder, type };
        return this;
    }

    /**
     * @description set the autocomplete of the input element.
     */
    public autocomplete(autocomplete: InputAutocompleteType): AeFormBuilder {
        this.newFormControlHolder = { ...this.newFormControlHolder, autocomplete };
        return this;
    }

    /**
     * @description set the placeholder of the input element.
     */
    public placeholder(placeholder: string): AeFormBuilder {
        this.newFormControlHolder = { ...this.newFormControlHolder, placeholder };
        return this;
    }
    /**
     * @description set the hint element value.
     */
    public hint(hint: string): AeFormBuilder {
        this.newFormControlHolder = { ...this.newFormControlHolder, hint };
        return this;
    }

    /**
     * @description set the value of lavel element.
     */
    public label(label: string): AeFormBuilder {
        this.newFormControlHolder = { ...this.newFormControlHolder, label };
        return this;
    }

    /**
     * @param options of select input
     */
    public options(options: InputOption[]): AeFormBuilder {
        this.newFormControlHolder = { ...this.newFormControlHolder, options };
        return this;
    }

    /**
     * @param range of the range input.
     */
    public range(range: { min: number, max: number }): AeFormBuilder {
        this.newFormControlHolder = { ...this.newFormControlHolder, range };
        return this;
    }

    /**
     * @param icon shown left side of the input.
     */
    public icon(icon: IconType): AeFormBuilder {
        this.newFormControlHolder = { ...this.newFormControlHolder, icon };
        return this;
    }


    /**
     * @param validator$ ValidatorFn.
     */
    public addValidator(validator$: ValidatorFn): AeFormBuilder {
        this.newFormControlHolder.validators = [
            ...this.newFormControlHolder.validators,
            validator$
        ];
        return;
    }

    /**
     * @description set the field required.
     */
    public required(): AeFormBuilder {
        this.addValidator((control) => {
            return control.value === '' ? { required: 'Field is required!' } : null;
        });
        return this;
    }

    /**
     * @description set the minLength requried for the field.
     */
    public minLength(minLength: number): AeFormBuilder {
        this.addValidator((control) => {
            return control.value?.length < minLength ? { minLength: `Field must contain at least ${minLength} chracter!` } : null;
        }
        );
        return this;
    }

    /**
     * @description set the maxLength of the field required.
     */
    public maxLength(maxLength: number): AeFormBuilder {
        this.addValidator(
            (control) => {
                return control.value?.length > maxLength
                    ? { maxLength: `Field must contain at most ${maxLength} chracter!` }
                    : null;
            }
        );
        return this;
    }

    /**
     * @description set the required maxDate of the field.
     */
    public maxDate(max: number): AeFormBuilder {
        this.addValidator(
            (control) => {
                return Date.parse(control.value) > max
                    ? { maxDate: `Field must be before the ${new Date(max).toLocaleDateString()}` }
                    : null;
            }
        );
        return this;
    }

    /**
     * @description set the minDate required for the field.
     */
    public minDate(min: number): AeFormBuilder {
        this.addValidator(
            (control) => {
                return Date.parse(control.value) < min
                    ? { minDate: `Field must be after the ${new Date(min).toLocaleDateString()}` }
                    : null;
            }
        );
        return this;
    }

    /**
     * @description set the required that field must be email.
     */
    public email(): AeFormBuilder {
        this.addValidator(
            (control) => {
                return validator.isEmail(control.value)
                    ? null
                    : { email: `${control.value} is not a valid email!` };
            }
        );
        return this;
    }


    /**
     * @description for the date field. set the start date of the date input.
     */
    public startDate(date: number): AeFormBuilder {
        this.newFormControlHolder.startDate = new Date(date);
        return this;
    }

    /**
     * @description there are 2 types of date input as basic and range. Choose one.
     */
    public dateType(type: DateControlType): AeFormBuilder {
        this.newFormControlHolder.dateType = type;
        return this;
    }



    /**
     * @description after configuring the input control, run this method to add the input control to the form.
     * Then, another input control can be added.s
     */
    public buildFormControl(): AeFormBuilder {
        this.dynamicForm.formInputs.push({ ...this.newFormControlHolder });
        this.newFormControlHolder = null;
        return this;
    }

    /**
     * @description After configuring everything, run this method to get the instance of the AeDyanmicForm.
     */
    public buildForm(): AeDynamicForm {
        return this.dynamicForm;
    }




    // public dateRange(range: boolean): AeFormBuilder {
    //     this.newFormControlHolder.dateRange = range;
    //     return this;
    // }

    // public dateConstantRange(contantRange: DateConstantRange): AeFormBuilder {
    //     this.newFormControlHolder.dateConstantRange = contantRange;
    //     return this;
    // }
}


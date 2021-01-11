// tslint:disable: max-line-length

import { FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { IconType } from 'ng-icon-type';
import { InputType, InputAutocompleteType } from 'form-input-type';

/**
 * @field visible value of the option
 * @field actual value of the option
 * @field icon of the option
 * @field checked whether the option is checked or not
 * @field disabled whether the option is disabled or not
 */
export interface InputOption {
  label?: string;
  value: string;
  icon?: IconType;
  checked?: boolean;
  disabled?: boolean;
}

/**
 * @field inputName the name of the referance input, which will be used to define the options.
 * For example, when the inputName is Country, the value will be the selected country,
 *  and the options will be States or city in that country
 * @field handler function that get the InputOption based on the value of the referance input ( which will be found using the input name)
 */
export interface DynamicOptions {
  inputName: string;
  handler: (value: any) => InputOption[];
}

/**
 * @description There are 2 date controller, range and basic.
 * Range allows user to select a range of data whereas the basis is just a single value.
 */
export type DateControlType = 'range' | 'basic';

/**
 * @field name: string;
 * @field type?: InputType;
 * @field dateType?: DateControlType;
 * @field dateRange?: boolean;
 * @field startDate?: Date;
 * @field state?: string | number;
 * @field validators?: ValidatorFn[];
 * @field autocomplete?: InputAutocompleteType;
 * @field hint?: string;
 * @field placeholder?: string;
 * @field label?: string;
 * @field options?: InputOption[];
 * @field range?: { min: number, max: number };
 * @field icon?: IconType;
 * @field disabled?: boolean;
 * @field classes?: string[];
 * @field styles?: string;
 * @field onChange?: (formGroup: FormGroup) => void;
 * @field onInput?: (formGroup: FormGroup) => void;
 * @field onActive?: (formGroup: FormGroup) => void;
 */
export interface AeFormControl {
  name: string;
  type?: InputType;
  dateType?: DateControlType;
  dateRange?: boolean;
  startDate?: Date;
  state?: string | number;
  validators?: ValidatorFn[];
  autocomplete?: InputAutocompleteType;
  hint?: string;
  placeholder?: string;
  label?: string;
  options?: InputOption[];
  dynamicOptions?: DynamicOptions;
  range?: { min: number; max: number };
  icon?: IconType;
  disabled?: boolean;
  classes?: string[];
  styles?: string;
  onChange?: (formGroup: FormGroup) => void;
  onInput?: (formGroup: FormGroup) => void;
  onActive?: (formGroup: FormGroup) => void;
}

/**
 * @field label/value of the submit button
 * @field color of the submit button
 * @field action is the click handler function.
 */
type SubmitButtonType = {
  value: string;
  color: 'accent' | 'warn' | 'primary';
  action?: (value: { [key: string]: string }) => void;
};

/**
 * @field formTitle is the title of the form
 * @field formInputs is the array of AeFormControl objects.
 * @field submitButton is an object of SubmitButtonType
 */
export interface AeDynamicForm {
  formTitle?: string;
  formInputs: AeFormControl[];
  submitButton?: SubmitButtonType;
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
  constructor() {}

  /**
   * @description AeDynamicForm instance.
   * @param formTitle is the title of the form.
   * @param submitButton contains value and color of the submit button
   */
  private dynamicForm: AeDynamicForm = {
    formTitle: 'Form Title',
    submitButton: { value: '', color: 'accent' },
    formInputs: [],
  };

  /**
   * @description  FormControl holder to kepp each formControl until adding it to the formInputs in the dynamicForm.
   */
  private newFormControlHolder: AeFormControl;

  /**
   * @set title of the form
   * @param title of the form
   */
  public title(title?: string): AeFormBuilder {
    this.dynamicForm.formTitle = title;
    return this;
  }

  /**
   * @set value/label of the submit button
   */
  public submitButtonLabel(value: string): AeFormBuilder {
    this.dynamicForm.submitButton.value = value;
    return this;
  }

  /**
   * @set the color of the submit button based on the angular theme colors liek accent, primary and warn.
   */
  public submitButtonColor(
    value: 'accent' | 'primary' | 'warn'
  ): AeFormBuilder {
    this.dynamicForm.submitButton.color = value;
    return this;
  }

  /**
   * @description Initialize the new form controller and set the name of it.
   * @param name of the input
   */
  public newControl(name: string): AeFormBuilder {
    this.newFormControlHolder = { name, validators: [() => null], options: [] };
    return this;
  }

  /**
   * @description set the initial value/state of the input field.
   * @param initial state/value of the input
   */
  public state(state: string): AeFormBuilder {
    this.newFormControlHolder = { ...this.newFormControlHolder, state };
    return this;
  }

  /**
   * @description set the type of the controlle like text , date, password, email, range, select etc.
   * @param type of the input like text, select etc.
   */
  public type(type: InputType): AeFormBuilder {
    this.newFormControlHolder = { ...this.newFormControlHolder, type };
    return this;
  }

  /**
   * @description set the native autocomplete property of the input element.
   * @param autocomplete of the input. native HTML autocomplete values.
   */
  public autocomplete(autocomplete: InputAutocompleteType): AeFormBuilder {
    this.newFormControlHolder = { ...this.newFormControlHolder, autocomplete };
    return this;
  }

  /**
   * @description set the native placeholder of the input element.
   * @param placeholder of the input. Native place holder
   */
  public placeholder(placeholder: string): AeFormBuilder {
    this.newFormControlHolder = { ...this.newFormControlHolder, placeholder };
    return this;
  }
  /**
   * @description set hint to explain the input value.
   * @param hint of the input. FormField hint component content
   */
  public hint(hint: string): AeFormBuilder {
    this.newFormControlHolder = { ...this.newFormControlHolder, hint };
    return this;
  }

  /**
   * @description set value of the input label
   * @param label of the input.
   */
  public label(label: string): AeFormBuilder {
    this.newFormControlHolder = { ...this.newFormControlHolder, label };
    return this;
  }

  /**
   * @param options set options for radio inputs, checkbox inputs, and select input.
   */
  public options(options: InputOption[]): AeFormBuilder {
    this.newFormControlHolder = { ...this.newFormControlHolder, options };
    return this;
  }

  /**
   * @param dynamicOptions DynamicOptions that contains inputName field and handler function.
   * @param inputName  is the name of the dependent input.
   * @param handler is the hander function, which has the value of the dependent input, that return the options based on it.
   * @description this is for a dynamic form inputs like cities based on State.
   * Or states based on country. Or Students based on classes. Or employees based on departments.
   * when the dependent input value change the options of this input will change.
   * @more for more information check out the builtin address from.
   */
  public dynamicOptions(dynamicOptions: DynamicOptions): AeFormBuilder {
    this.newFormControlHolder = {
      ...this.newFormControlHolder,
      dynamicOptions,
    };
    return this;
  }

  /**
   * @description set the min and max values of range input element.
   * @param range of the value that contains min and max values.
   */
  public range(range: { min: number; max: number }): AeFormBuilder {
    this.newFormControlHolder = { ...this.newFormControlHolder, range };
    return this;
  }

  /**
   * @description set an icon for the input.
   * @param icon Angular material icon. It will be placed right side of the input.
   */
  public icon(icon: IconType): AeFormBuilder {
    this.newFormControlHolder = { ...this.newFormControlHolder, icon };
    return this;
  }

  /**
   * @description add a custom validator for the input element.
   * @param validator$ ValidatorFn.
   */
  public addValidator(validator$: ValidatorFn): AeFormBuilder {
    this.newFormControlHolder.validators = [
      ...this.newFormControlHolder.validators,
      validator$,
    ];
    return this;
  }

  /**
   * @description set the input required.
   */
  public required(): AeFormBuilder {
    this.addValidator((control) =>
      control.value === '' ? { required: 'Field is required!' } : null
    );
    return this;
  }

  /**
   * @description set the minLength requried for the field.
   */
  public minLength(minLength: number): AeFormBuilder {
    this.addValidator((control) =>
      control.value?.length < minLength
        ? { minLength: `Field must contain at least ${minLength} chracter!` }
        : null
    );
    return this;
  }

  /**
   * @description set the maxLength of the field required.
   */
  public maxLength(maxLength: number): AeFormBuilder {
    this.addValidator((control) =>
      control.value?.length > maxLength
        ? { maxLength: `Field must contain at most ${maxLength} chracter!` }
        : null
    );
    return this;
  }

  /**
   * @description set the required maxDate of the field.
   */
  public maxDate(max: number): AeFormBuilder {
    this.addValidator((control) =>
      Date.parse(control.value) > max
        ? {
            maxDate: `Field must be before the ${new Date(
              max
            ).toLocaleDateString()}`,
          }
        : null
    );
    return this;
  }

  /**
   * @description set the minDate required for the field.
   */
  public minDate(min: number): AeFormBuilder {
    this.addValidator((control) =>
      Date.parse(control.value) < min
        ? {
            minDate: `Field must be after the ${new Date(
              min
            ).toLocaleDateString()}`,
          }
        : null
    );
    return this;
  }

  /**
   * @description set the required that field must be email.
   */
  public email(): AeFormBuilder {
    this.addValidator((control) =>
      Validators.email(control)
        ? { email: `${control.value} is not a valid email!` }
        : null
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
   * @param type of the data.
   */
  public dateType(type: DateControlType): AeFormBuilder {
    this.newFormControlHolder.dateType = type;
    return this;
  }

  /**
   * @description set listener for chagne event
   * @param onInput handler function for change event of the input field.
   */
  public onInput(onInput: (formGroup: FormGroup) => void): AeFormBuilder {
    this.newFormControlHolder.onInput = onInput;
    return this;
  }

  /**
   * @description set listener for chagne event
   * @param change handler function for change event of the input field.
   */
  public onChange(onChange: (formGroup: FormGroup) => void): AeFormBuilder {
    this.newFormControlHolder.onChange = onChange;
    return this;
  }

  /**
   * @description set the style of the input field.
   */
  public styles(styles: string): AeFormBuilder {
    this.newFormControlHolder.styles = styles;
    return this;
  }

  /**
   * @description set the class for the inpuput field
   * @param classes CSS class
   */
  public classes(classes: string[]): AeFormBuilder {
    this.newFormControlHolder.classes = classes;
    return this;
  }

  /**
   * @description set the field disabled.
   */
  public disabled(disabled: boolean): AeFormBuilder {
    this.newFormControlHolder.disabled = disabled;
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
}

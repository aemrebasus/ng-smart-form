import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
} from '@angular/forms';
import { AeFormControl } from './ae-dynamic-form.class';
import { InputType } from 'form-input-type';
import {
  AeDynamicForm,
  AeFormBuilder,
  DateControlType,
} from './ae-dynamic-form.class';

const TEXT_FIELD: InputType[] = [
  'text',
  'color',
  'number',
  'email',
  'password',
  'search',
  'tel',
  'url',
];
const SELECT_FIELD: InputType[] = ['select', 'select-many'];
const RANGE_FIELD: InputType[] = ['range'];
const DATE_FIELD: InputType[] = ['date', 'datetime-local', 'week', 'time'];

@Component({
  selector: 'ae-dynamic-form',
  templateUrl: './ae-dynamic-form.component.html',
  styleUrls: ['./ae-dynamic-form.component.scss'],
})
export class AeDynamicFormComponent implements OnInit {
  public readonly RANGE_EXTENSION = '-range';
  public readonly CONFIRM_EXTENSION = '-confirm';

  public formGroup: FormGroup;
  public isSubmitted$ = false;
  public get isSubmitted(): boolean {
    return this.isSubmitted$;
  }
  public set isSubmitted(value: boolean) {
    this.isSubmitted$ = value;
  }

  public matchMap: Map<string, any[]> = new Map();

  @Output() submitted = new EventEmitter<{ [key: string]: string }>();

  @Input() position:
    | 'f-end'
    | 'f-start'
    | 'f-center'
    | 'f-between'
    | 'f-around' = 'f-end';

  @Input() resetButton: boolean = true;

  @Input() input: AeDynamicForm = new AeFormBuilder()
    .title('Form Title')
    .newControl('firstName')
    .placeholder('Type First Name')
    .icon('360')
    .label('First Name')
    .required()
    .maxLength(10)
    .minLength(3)
    .buildFormControl()

    .newControl('lastName')
    .placeholder('Type Last Name')
    .icon('perm_camera_mic')
    .required()
    .label('Last Name')
    .buildFormControl()

    .newControl('dbirth')
    .type('date')
    .startDate(Date.now())
    .required()
    .maxDate(Date.now())
    .buildFormControl()

    .newControl('Select Option')
    .type('select')
    .options([
      { label: 'Option 1', value: 'Value 1' },
      { label: 'Option 2', value: 'Value 2' },
      { label: 'Option 3', value: 'Value 3' },
    ])
    .buildFormControl()

    .newControl('range')
    .type('range')
    .label('Range Label')
    .range({ min: 0, max: 100 })
    .buildFormControl()

    .newControl('gender')
    .type('radio')
    .options([
      { label: 'male', value: 'male' },
      { label: 'female', value: 'female' },
    ])
    .buildFormControl()

    .newControl('Fruit')
    .label('fruit')
    .type('checkbox')
    .buildFormControl()

    .newControl('Banana')
    .label('Banana')
    .type('checkbox')
    .buildFormControl()

    .buildForm();

  ngOnInit(): void {
    this.initFormGroup();
  }

  private initFormGroup(): void {
    const object = {};
    for (const input of this.input.formInputs) {
      const newControl = new FormControl(input.state, input.validators);

      // Adding helper properties

      // optional property to exclude a field from validation
      (newControl as any).optional = input.optional ? true : false;

      // confirmation property to detect fields that have confirmation
      (newControl as any).confirmation = input.confirmation ? true : false;

      // control name for convinience
      (newControl as any).name = input.name;

      // If the input type is range , then add another control automatically to store the end date.
      if (input.dateType === 'range') {
        const dateRangeEnd = new FormControl('');
        // make sure the '-range' extention matches with the name in the template.
        object[input.name + this.RANGE_EXTENSION] = dateRangeEnd;
      }

      // Adding confirmation field like password confirmation if any
      if (input.confirmation) {
        // make sure the '-confirm' extention matches with the name in the tempalte.
        object[input.name + this.CONFIRM_EXTENSION] = new FormControl('');
      }

      object[input.name] = newControl;

      // Set default value of autocomplete off
      if (!input.autocomplete) {
        input.autocomplete = 'off';
      }
    }

    // Initialize the FormGroup
    this.formGroup = new FormGroup(object);
  }

  /**
   * @description Add (*) asteriks if the field is optional or (optional) at the end of the place holder.
   */
  public preparePlaceholder(formInput: AeFormControl): string {
    if (formInput.optional) {
      return formInput.placeholder + ' (optional)';
    }
    return '(*) ' + formInput.placeholder;
  }

  private getFormControlByName(controlName: string): AbstractControl {
    return this.formGroup.controls[controlName];
  }

  private getErrorsByControlName(
    controlName: string
  ): { [key: string]: string | null } {
    return this.getFormControlByName(controlName)?.errors;
  }

  /**
   * @description get the error messages from the control
   */
  public errorMessage(controlName: string): string[] {
    const control = this.getFormControlByName(controlName);

    const validateField = () => {
      const errors = this.getErrorsByControlName(controlName);
      const confirmErrors = this.getErrorsByControlName(
        controlName + this.CONFIRM_EXTENSION
      );
      return errors || confirmErrors
        ? Object.values({ ...errors, ...confirmErrors })
        : null;
    };

    if (control.touched || controlName.endsWith(this.CONFIRM_EXTENSION)) {
      return validateField();
    }

    return null;
  }

  /**
   * @description check the form is submittable or not.
   */
  public isFormSubmitable(): boolean {
    return (
      this.isFormFieldsValid() &&
      this.isFormValid() &&
      this.isFormTouched() &&
      this.isFormDirty()
    );
  }

  /**
   * @description return true if the confirmation field value matches the actual field value
   */
  public activateConfirmationValidation(name: string) {
    const actualValue = this.getInputValueByName(name);
    const confirmControl = this.getFormControlByName(
      name + this.CONFIRM_EXTENSION
    );
    confirmControl.setValidators([
      (c) => {
        if (c.value === actualValue) {
          return null;
        } else {
          return {
            match: name + 's do not match!',
          };
        }
      },
    ]);
  }

  /**
   * @description check validation of all fields
   */
  public isFormFieldsValid(): boolean {
    return Object.values(this.formGroup.controls)
      .map((c: any) => {
        if (c.optional) {
          return true;
        }
        if (c.dirty) {
          //&& c.touched

          if (c.confirmation) {
            this.activateConfirmationValidation(c.name);
          }

          return c.valid;
        }
        return false;
      })
      .reduce((f, s) => f && s);
  }
  public isFormValid(): boolean {
    return this.formGroup.valid;
  }
  public isFormInvalid(): boolean {
    return this.formGroup.invalid;
  }
  public isFormTouched(): boolean {
    return this.formGroup.touched;
  }
  public isFormDirty(): boolean {
    return this.formGroup.dirty;
  }

  public selectedValueChange(inputName: string): void {
    this.input.formInputs.forEach((e) => {
      if (e.dynamicOptions && e.dynamicOptions.inputName === inputName) {
        e.options = e.dynamicOptions.handler(
          this.getInputValueByName(inputName)
        );
      }
    });
  }

  // Submit Reset Methods
  public submit(): void {
    if (this.isFormSubmitable()) {
      console.log(this.formGroup.value);
      if (this.input.submitButton.action) {
        this.input.submitButton.action(this.formGroup.value);
      }
      this.submitted.emit(this.formGroup.value);
      this.isSubmitted = true;
    } else {
      alert('Form is not valid!');
    }
  }
  public reset(): void {
    this.formGroup.reset();
  }

  public getInputValueByName(name: string): any {
    return this.getFormControlByName(name).value;
  }

  // Is Input type === ?
  public isTextField(value: InputType | null): boolean {
    if (!value) {
      return true;
    }
    return TEXT_FIELD.includes(value);
  }
  public isDateField(value: InputType | null): boolean {
    return DATE_FIELD.includes(value);
  }
  public isBasicDateField(value: DateControlType): boolean {
    return value === 'basic' || value == null;
  }
  public isRangeDateField(value: DateControlType): boolean {
    return value === 'range';
  }
  public isSelectField(type: InputType): boolean {
    return SELECT_FIELD.includes(type);
  }
  public isMultipleSelect(type: InputType): boolean {
    return type === 'select-many';
  }
  public isTextArea(type: InputType): boolean {
    return type === 'text-area';
  }
  public isCheckbox(type: InputType): boolean {
    return type === 'checkbox';
  }
  public isRadio(type: InputType): boolean {
    return type === 'radio';
  }
  public isRange(type: InputType): boolean {
    return type === 'range';
  }

  // public inComparisonDateField(value: DateControlType): boolean {    return value === 'comparison'; }
  // public isConstantRangeDateField(value: DateControlType): boolean {     return value === 'constant-range';   }
}

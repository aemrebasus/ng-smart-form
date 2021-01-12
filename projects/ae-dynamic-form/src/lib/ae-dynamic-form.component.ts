import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
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
  public formGroup: FormGroup;
  public isSubmitted$ = false;
  public get isSubmitted(): boolean {
    return this.isSubmitted$;
  }
  public set isSubmitted(value: boolean) {
    this.isSubmitted$ = value;
  }

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
    const dateRangeHelper0 = new FormControl('');
    const object = {};
    for (const input of this.input.formInputs) {
      if (input.dateType === 'range') {
        // tslint:disable-next-line: no-string-literal
        object['dateRangeHelper0'] = dateRangeHelper0;
      }
      const newControl = new FormControl(input.state, input.validators);

      // Adding an extra property to the FormControl to check the field is optional or not
      // This property excludes the untouched and undirty optional fields from  the input validation process.
      (newControl as any).optional = !!input.optional;

      object[input.name] = newControl;

      if (!input.autocomplete) {
        input.autocomplete = 'off';
      }
    }
    this.formGroup = new FormGroup(object);
  }

  private getFormControlByName(controlName: string): AbstractControl {
    return this.formGroup.controls[controlName];
  }

  private getErrorsByControlName(
    controlName: string
  ): { [key: string]: string | null } {
    return this.getFormControlByName(controlName).errors;
  }

  //  Form Validation Check
  public errorMessage(controlName: string): string[] {
    const errors = this.getErrorsByControlName(controlName);
    return errors ? Object.values(errors) : null;
  }
  public isFormSubmitable(): boolean {
    return (
      this.isFormFieldsValid() &&
      this.isFormValid() &&
      this.isFormTouched() &&
      this.isFormDirty()
    );
  }

  public isFormFieldsValid(): boolean {
    return Object.values(this.formGroup.controls)
      .map((c: any) => {
        if (c.optional) {
          return true;
        }
        return c.valid && c.dirty; //&& c.touched
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

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { AeDynamicForm, AeFormBuilder } from './ae-dynamic-form.class';

@Component({
  selector: 'ae-dynamic-form',
  templateUrl: './ae-dynamic-form.component.html',
  styleUrls: ['./ae-dynamic-form.component.scss']
})
export class AeDynamicFormComponent implements OnInit {

  protected formGroup: FormGroup;

  public isSubmitted$ = false;
  public get isSubmitted(): boolean { return this.isSubmitted$; }
  public set isSubmitted(value: boolean) { this.isSubmitted$ = value; }

  @Output() submitted = new EventEmitter<{ [key: string]: string }>();

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
    .required()
    .maxDate(Date.now())
    .buildFormControl()
    .buildForm();

  ngOnInit(): void {
    this.initFormGroup();
  }

  private initFormGroup(): void {
    const object = {};
    this.input.formInputs.forEach(i => object[i.name] = new FormControl(i.state, i.validators));
    this.formGroup = new FormGroup(object);
  }

  private getFormControlByName(controlName: string): AbstractControl {
    return this.formGroup.controls[controlName];
  }

  private getFormControlErrorsByName(controlName: string): { [key: string]: string | null } {
    return this.getFormControlByName(controlName).errors;
  }

  public errorMessage(controlName: string): string[] {
    const errors = this.getFormControlErrorsByName(controlName);
    if (errors) {
      return Object.values(errors);
    } else {
      return null;
    }
  }

  public reset(): void {
    this.formGroup.reset();
  }

  public isFormSubmitable(): boolean {
    return this.isFormFieldsValid()
      && this.isFormValid()
      && this.isFormTouched()
      && this.isFormDirty();
  }

  public isFormFieldsValid(): boolean {
    return Object.values(this.formGroup.controls).map(c => c.valid && c.touched && c.dirty).reduce((f, s) => f && s);
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

  public submit(): void {
    console.log(this.formGroup.value);
    if (this.isFormSubmitable()) {
      if (this.input.submitButton.action) {
        this.input.submitButton.action(this.formGroup.value);
      }
      this.submitted.emit(this.formGroup.value);
      this.isSubmitted = true;
    } else {
      console.log('Form is not ready yet');
    }
  }

}

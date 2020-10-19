import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { AeDynamicForm, AeFormBuilder } from './ae-dynamic-form.class';
import { aeValidators } from './builtin-validators';


@Component({
  selector: 'ae-dynamic-form',
  templateUrl: './ae-dynamic-form.component.html',
  styleUrls: ['./ae-dynamic-form.component.scss']
})
export class AeDynamicFormComponent implements OnInit {

  protected formGroup: FormGroup;
  @Input() input: AeDynamicForm = new AeFormBuilder()
    .title('Form Title')
      .newControl('firstName')
        .placeholder('Type First Name')
        .icon('360')
        .label('First Name')
        .required()
        .max(10)
        .min(3)
        .buildFormControl()
      .newControl('lastName')
        .placeholder('Type Last Name')
        .icon('perm_camera_mic')
        .label('Last Name')
        .buildFormControl()
    .buildForm();

  ngOnInit(): void {
    this.initFormGroup();
  }

  initFormGroup(): void {
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

  reset(): void {
    this.formGroup.reset();
  }

  submit(): void {
    console.log(this.formGroup.value);
  }

}

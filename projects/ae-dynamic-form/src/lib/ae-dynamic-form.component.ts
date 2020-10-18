import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IconType } from 'ng-icon-type';
import { ExtendedFormControl } from './ExtendedFormControl';


export interface AeDynamicForm {
  formTitle?: string;
  formGroup: FormGroup;
  formInputs: ExtendedFormControl[];
  submitButton: { value: string, color: 'accent' | 'warn' | 'primary' };

}


@Component({
  selector: 'ae-dynamic-form',
  templateUrl: './ae-dynamic-form.component.html'
})
export class AeDynamicFormComponent implements OnInit {

  protected formGroup: FormGroup;

  @Input() formTitle: string;
  @Input() formInputs: ExtendedFormControl[] = [
    new ExtendedFormControl('firstName', 'text', '', [], '4k')
  ];
  @Input() submitButton: { value: string, color: 'accent' | 'warn' | 'primary' } = {
    value: 'Submit',
    color: 'accent'
  };

  @Input() icon: IconType = '360';

  ngOnInit(): void {
    this.initFormGroup();
  }

  initFormGroup(): void {
    const object = {};
    this.formInputs.forEach(i => object[i.name] = i.control);
    this.formGroup = new FormGroup(object);
  }



  submit(): void {

  }

}

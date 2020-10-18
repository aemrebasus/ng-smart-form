import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AeDynamicForm } from './ae-dynamic-form.class';


@Component({
  selector: 'ae-dynamic-form',
  templateUrl: './ae-dynamic-form.component.html',
  styleUrls: ['./ae-dynamic-form.component.scss']
})
export class AeDynamicFormComponent implements OnInit {
  protected formGroup: FormGroup;

  @Input() input: AeDynamicForm = {
    formTitle: 'Test Form',
    submitButton: {
      value: 'Label',
      color: 'accent',
    },
    formInputs: [
      { name: 'firstName', placeholder: 'First Name' },
      { name: 'lastName', placeholder: 'Last Name', }
    ]
  };

  ngOnInit(): void {
    this.initFormGroup();
  }

  initFormGroup(): void {
    const object = {};
    this.input.formInputs.forEach(i => object[i.name] = new FormControl(i.state, i.validators));
    this.formGroup = new FormGroup(object);
  }


  reset(): void {
    this.formGroup.reset();
  }

  submit(): void {
    console.log(this.formGroup.value);
  }

}

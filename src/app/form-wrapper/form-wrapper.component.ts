import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.scss']
})
export class FormWrapperComponent implements OnInit {
  form;
  code = '';
  html = '<ae-dynamic-form [input]="form"></ae-dynamic-form>';

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.data.subscribe(data => {
      this.form = data.form;
      this.code = data.code;
      console.log(data.form.title);
    });

  }

}

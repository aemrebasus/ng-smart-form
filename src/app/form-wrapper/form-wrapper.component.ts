import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.scss']
})
export class FormWrapperComponent implements OnInit {
  form;
  code = '';
  html = `
  <ae-dynamic-form [input]="form" (submitted)="submit($event)">

  </ae-dynamic-form>
  `;

  constructor(private router: ActivatedRoute, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.router.data.subscribe(data => {
      this.form = data.form;
      this.code = data.code;
    });

  }

  popup(msg: string): void {
    this.snackBar.open(msg, null, { duration: 2000 });
  }

}

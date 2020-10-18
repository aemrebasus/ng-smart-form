import { Component, OnInit } from '@angular/core';
import { AeSideNav } from 'ae-material';
import { AeDynamicForm } from 'projects/ae-dynamic-form/src/public-api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public currentForm: any;

  public navbar: AeSideNav = {
    list: {
      list: [
        { value: 'Login Form', icon: 'login' },
      ]
    },
    toolbar: {
      list: []
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}

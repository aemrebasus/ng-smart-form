import { Component, OnInit } from '@angular/core';
import { AeSideNav } from 'ae-material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public navbar: AeSideNav = {
    list: {
      list: []
    },
    toolbar: {
      list: []
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}

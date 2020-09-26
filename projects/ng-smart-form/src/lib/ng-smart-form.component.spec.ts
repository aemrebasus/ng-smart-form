import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSmartFormComponent } from './ng-smart-form.component';

describe('NgSmartFormComponent', () => {
  let component: NgSmartFormComponent;
  let fixture: ComponentFixture<NgSmartFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSmartFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSmartFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

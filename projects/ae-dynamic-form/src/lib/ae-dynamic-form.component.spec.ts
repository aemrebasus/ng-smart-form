import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeDynamicFormComponent } from './ae-dynamic-form.component';

describe('AeDynamicFormComponent', () => {
  let component: AeDynamicFormComponent;
  let fixture: ComponentFixture<AeDynamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeDynamicFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AeDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

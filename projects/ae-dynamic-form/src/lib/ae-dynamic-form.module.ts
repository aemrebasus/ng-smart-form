import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, NativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { AeDynamicFormComponent } from './ae-dynamic-form.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [AeDynamicFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  exports: [AeDynamicFormComponent]
})
export class AeDynamicFormModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AeSideNavModule } from 'ae-material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AeDynamicFormModule } from 'projects/ae-dynamic-form/src/public-api';
import { FormWrapperComponent } from './form-wrapper/form-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AeSideNavModule,
    AeDynamicFormModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

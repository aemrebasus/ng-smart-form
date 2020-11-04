import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import {
  ADDRESS_FORM, ADDRESS_FORM_CODE, CONTACT_FORM,
  CONTACT_FORM_CODE, SIGNIN_FORM_CODE, SIGNIN_FORM, SUBSCRIPTION_FORM_CODE, SUBSCRIPTION_FORM, COMMENT_FORM, TASK_FORM, TASK_FROM_CODE
} from './builtin-forms';
import { DATE_RANGE_FORM, DATE_RANGE_FORM_CODE } from './builtin-forms/a-date-form';
import { ContactComponent } from './contact/contact.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { FormWrapperComponent } from './form-wrapper/form-wrapper.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path: '', component: DocumentationComponent, children: [
      { path: 'address', component: FormWrapperComponent, data: { form: ADDRESS_FORM, code: ADDRESS_FORM_CODE } },
      { path: 'contact', component: FormWrapperComponent, data: { form: CONTACT_FORM, code: CONTACT_FORM_CODE } },
      { path: 'login', component: FormWrapperComponent, data: { form: SIGNIN_FORM, code: SIGNIN_FORM_CODE } },
      { path: 'subscription', component: FormWrapperComponent, data: { form: SUBSCRIPTION_FORM, code: SUBSCRIPTION_FORM_CODE } },
      { path: 'date', component: FormWrapperComponent, data: { form: DATE_RANGE_FORM, code: DATE_RANGE_FORM_CODE } },
      { path: 'task', component: FormWrapperComponent, data: { form: TASK_FORM, code: TASK_FROM_CODE } }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

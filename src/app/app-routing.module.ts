import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import {
  ADDRESS_FORM,
  ADDRESS_FORM_CODE,
  CONTACT_FORM,
  CONTACT_FORM_CODE,
  SIGNIN_FORM_CODE,
  SIGNIN_FORM,
  SUBSCRIPTION_FORM_CODE,
  SUBSCRIPTION_FORM,
  COMMENT_FORM,
  TASK_FORM,
  TASK_FROM_CODE,
} from './builtin-forms';
import {
  DATE_RANGE_FORM,
  DATE_RANGE_FORM_CODE,
} from './builtin-forms/a-date-form';
import { DocumentationComponent } from './documentation/documentation.component';
import { FormWrapperComponent } from './form-wrapper/form-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentationComponent,
    children: [
      {
        path: 'doc/address',
        component: FormWrapperComponent,
        data: { form: ADDRESS_FORM, code: ADDRESS_FORM_CODE },
      },
      {
        path: 'doc/contact',
        component: FormWrapperComponent,
        data: { form: CONTACT_FORM, code: CONTACT_FORM_CODE },
      },
      {
        path: 'doc/login',
        component: FormWrapperComponent,
        data: { form: SIGNIN_FORM, code: SIGNIN_FORM_CODE },
      },
      {
        path: 'doc/subscription',
        component: FormWrapperComponent,
        data: { form: SUBSCRIPTION_FORM, code: SUBSCRIPTION_FORM_CODE },
      },
      {
        path: 'doc/date',
        component: FormWrapperComponent,
        data: { form: DATE_RANGE_FORM, code: DATE_RANGE_FORM_CODE },
      },
      {
        path: 'doc/task',
        component: FormWrapperComponent,
        data: { form: TASK_FORM, code: TASK_FROM_CODE },
      },
      {
        path: 'doc/signin',
        component: FormWrapperComponent,
        data: { form: SIGNIN_FORM, code: SIGNIN_FORM_CODE },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

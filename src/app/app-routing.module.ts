import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ADDRESS_FORM, CONTACT_FORM, SIGNIN_FORM, SUBSCRIPTION_FORM, COMMENT_FORM, TASK_FORM } from './builtin-forms';
import { FormWrapperComponent } from './form-wrapper/form-wrapper.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'address', component: FormWrapperComponent, data: { form: ADDRESS_FORM } },
      { path: 'contact', component: FormWrapperComponent, data: { form: CONTACT_FORM } },
      { path: 'login', component: FormWrapperComponent, data: { form: SIGNIN_FORM } },
      { path: 'subscription', component: FormWrapperComponent, data: { form: SUBSCRIPTION_FORM } },
      { path: 'comment', component: FormWrapperComponent, data: { form: COMMENT_FORM } },
      { path: 'task', component: FormWrapperComponent, data: { form: TASK_FORM } }
    ]
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

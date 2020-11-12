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
import { DocumentationComponent } from './documentation/documentation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MatTabsModule } from '@angular/material/tabs';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AeComponentDocumentModule } from 'ae-component-document';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormWrapperComponent,
    DocumentationComponent,
    ContactComponent,
    AboutComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AeSideNavModule,
    AeDynamicFormModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    ClipboardModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AeComponentDocumentModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: function () { return import('highlight.js/lib/core'); },
        lineNumbersLoader: function () { return import('highlightjs-line-numbers.js'); }, // Optional, only if you want the line number}s
        languages: {
          typescript: function () { return import('highlight.js/lib/languages/typescript'); },
          css: function () { return import('highlight.js/lib/languages/css'); },
          xml: function () { return import('highlight.js/lib/languages/xml'); },
          json: function () { return import('highlight.js/lib/languages/xml'); }
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

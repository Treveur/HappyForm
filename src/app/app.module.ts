import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatListModule} from '@angular/material';

import { HttpClientModule } from '@angular/common/http';
import { HappyformContainerComponent } from './happyform-container/happyform-container.component';
import { FormServiceApi } from './services/formServiceApi';
import { HappyformListformComponent } from './happyform-listform/happyform-listform.component';

@NgModule({
  declarations: [
    AppComponent,
    HappyformContainerComponent,
    HappyformListformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    HttpClientModule,
  ],
  providers: [FormServiceApi],
  bootstrap: [AppComponent]
})
export class AppModule { }

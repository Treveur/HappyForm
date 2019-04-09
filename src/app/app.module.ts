import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatListModule, MatRadioModule, MatInputModule} from '@angular/material';

import { HttpClientModule } from '@angular/common/http';
import { HappyformContainerComponent } from './happyform-container/happyform-container.component';
import { FormService } from './services/formService';
import { HappyformListformComponent } from './happyform-listform/happyform-listform.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { FormComponent } from './form/form.component';
import { QuestionComponent } from './question/question.component';
import { FormsModule } from '@angular/forms';
import { StatComponent } from './stat/stat.component';

@NgModule({
  declarations: [
    AppComponent,
    HappyformContainerComponent,
    HappyformListformComponent,
    FormComponent,
    QuestionComponent,
    StatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatRadioModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }

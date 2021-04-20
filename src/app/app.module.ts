import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PrologueComponent} from './prologue/prologue.component';
import {MatCardModule} from '@angular/material/card';
import {FormComponent} from './form/form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { LogComponent } from './log/log.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AppService} from "../app.service";

@NgModule({
  declarations: [
    AppComponent,
    PrologueComponent,
    FormComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  providers: [HttpClient, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

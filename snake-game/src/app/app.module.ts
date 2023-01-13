import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PlayComponent } from './play/play.component';
import { PlayModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PlayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    PlayModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

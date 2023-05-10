import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PlayComponent } from './play/play.component';
import { NgxSnakeModule } from 'ngx-snake';
import { FilterPipe } from './Pipes/filter.pipe';
import { AppRoutingModule } from './app-routing.module';
import { ScoreService } from './Services/score.service';
import { HttpClientModule } from '@angular/common/http';
import { SortPipe } from './Pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PlayComponent,
    FilterPipe,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSnakeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: ScoreService , useClass : ScoreService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { FormsModule } from '@angular/forms';
import { TodoInputListComponent } from './todo-input-list/todo-input-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoInputComponent,
    TodoInputListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

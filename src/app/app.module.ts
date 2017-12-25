import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { FormsModule } from '@angular/forms';
import { TodoInputListComponent } from './todo-input-list/todo-input-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule, MatButtonModule, MatInputModule, MatIconModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    TodoInputComponent,
    TodoInputListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

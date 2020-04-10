import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksCategoriesComponent } from './books-categories/books-categories.component';
import { BookListComponent } from './book-list/book-list.component';
import { ComicsDetailComponent } from './comics-detail/comics-detail.component';
import { LoginComponent } from './login/login.component';
import { BooksDetailComponent } from './books-detail/books-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksCategoriesComponent,
    BookListComponent,
    ComicsDetailComponent,
    LoginComponent,
    BooksDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

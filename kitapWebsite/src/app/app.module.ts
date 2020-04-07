import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { BooksCategoriesComponent } from './books-categories/books-categories.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ComicsDetailComponent } from './comics-detail/comics-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    BooksCategoriesComponent,
    BookDetailComponent,
    ComicsDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

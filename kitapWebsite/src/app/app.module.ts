import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { BooksCategoriesComponent } from './books-categories/books-categories.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ComicsDetailComponent } from './comics-detail/comics-detail.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    BooksCategoriesComponent,
    BookDetailComponent,
    ComicsDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

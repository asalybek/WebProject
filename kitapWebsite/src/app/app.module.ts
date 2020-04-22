import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BooksCategoriesComponent } from './books-categories/books-categories.component';
import { BookListComponent } from './book-list/book-list.component';
import { ComicsDetailComponent } from './comics-detail/comics-detail.component';
import { LoginComponent } from './login/login.component';
import { BooksDetailComponent } from './books-detail/books-detail.component';

import { AppRoutingModule } from './app-routing.module';
import { ComicsCategoriesComponent } from './comics-categories/comics-categories.component';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BooksCategoriesComponent,
    BookListComponent,
    ComicsDetailComponent,
    LoginComponent,
    BooksDetailComponent,
    ComicsCategoriesComponent,
    ComicsListComponent,
    MainDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

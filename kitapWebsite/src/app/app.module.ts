import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { BooksCategoriesComponent } from './books-categories/books-categories.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ComicsDetailComponent } from './comics-detail/comics-detail.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {path: 'books-categories', component: BooksCategoriesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    BooksCategoriesComponent,
    BookDetailComponent,
    ComicsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

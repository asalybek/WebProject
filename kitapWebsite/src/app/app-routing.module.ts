import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksCategoriesComponent} from './books-categories/books-categories.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: 'books-categories', component: BooksCategoriesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'books-categories/:categoryId/books', component: BookDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

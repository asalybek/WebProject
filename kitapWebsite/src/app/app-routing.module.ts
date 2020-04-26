import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksCategoriesComponent} from './books-categories/books-categories.component';

import {BookListComponent} from './book-list/book-list.component';
import {LoginComponent} from './login/login.component';
import {MainDashboardComponent} from './main-dashboard/main-dashboard.component';
import {ComicsCategoriesComponent} from './comics-categories/comics-categories.component';
import {ComicsDetailComponent} from './comics-detail/comics-detail.component';
import {ComicsListComponent} from './comics-list/comics-list.component';
import {BooksDetailComponent} from './books-detail/books-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainDashboardComponent },
  { path: 'books', component: BooksCategoriesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'comics', component: ComicsCategoriesComponent },
  { path: 'comics/:category_id/all/:id', component: ComicsDetailComponent},
  { path : 'comics/:category_id/all', component: ComicsListComponent},
  { path: 'books/:book_category_name/all/:id', component: BooksDetailComponent},
  { path : 'books/:book_category_name/all', component: BookListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

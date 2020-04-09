import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksCategoriesComponent} from './books-categories/books-categories.component';

const routes: Routes = [
  { path: 'books-categories', component: BooksCategoriesComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

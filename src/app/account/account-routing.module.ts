import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleEditorComponent } from './article-editor/article-editor.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'articles',
    component: ArticleListComponent
  },
  {
    path: 'articles/:id',
    component: ArticleEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [HomeComponent, AuthComponent, ArticleListComponent, ArticleDetailComponent],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule
  ]
})
export class CoreModule { }

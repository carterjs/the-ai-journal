import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';

@NgModule({
  declarations: [HomeComponent, ArticleListComponent, ArticleEditComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialModule
  ]
})
export class AccountModule { }

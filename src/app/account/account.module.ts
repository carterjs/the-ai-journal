import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material.module';
import { ArticleEditorComponent } from './article-editor/article-editor.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, ArticleEditorComponent, ArticleListComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class AccountModule { }

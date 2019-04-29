import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material.module';
import { ArticleEditorComponent } from './article-editor/article-editor.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleFormComponent } from './article-form/article-form.component';
import { SourceFormDialogComponent } from './source-form-dialog/source-form-dialog.component';
import { ArticleCreatorComponent } from './article-creator/article-creator.component';

@NgModule({
  declarations: [HomeComponent, ArticleEditorComponent, ArticleListComponent, ArticleFormComponent, SourceFormDialogComponent, ArticleCreatorComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [SourceFormDialogComponent]
})
export class AccountModule { }

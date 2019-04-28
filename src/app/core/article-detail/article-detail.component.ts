import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { load } from 'src/app/animations/load';
import { SourceDialogComponent } from '../source-dialog/source-dialog.component';
import { MatDialog, MatBottomSheetRef, MatBottomSheet } from '@angular/material';
import { SourceSheetComponent } from '../source-sheet/source-sheet.component';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
  animations: [
    load
  ]
})
export class ArticleDetailComponent {

  id$: Observable<any>;

  constructor(private articleService: ArticleService, route: ActivatedRoute, private bottomSheet: MatBottomSheet) {
    this.id$ = route.paramMap.pipe(map(params => params.get('id')));
    this.id$.subscribe(id => {
      document.addEventListener('click', event => {
        if(event.target.tagName == "CITE") {
          this.showSources(articleService.get(id).sources, event.target.innerHTML);
        }
      });
    });
  }

  showSources(sources, tag) {
    this.bottomSheet.open(SourceSheetComponent, {
      data: {
        tag,
        sources: sources.filter(source => source.tag == tag.slice(1))
      }
    });
  }

  withSources(str) {
    return str.slice().replace(/\((#|\.)[a-zA-Z0-9_]+\)/g, function(match) {
      return `(<cite>${match.slice(1,-1)}</cite>)`;
    });
  }

}

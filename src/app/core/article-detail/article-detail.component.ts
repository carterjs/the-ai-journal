import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { load } from 'src/app/animations/load';
import { MatDialog, MatBottomSheetRef, MatBottomSheet } from '@angular/material';
import { SourceSheetComponent } from '../source-sheet/source-sheet.component';
import { AngularFirestore } from '@angular/fire/firestore';

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
  rating: boolean;

  constructor(private articleService: ArticleService, route: ActivatedRoute, private bottomSheet: MatBottomSheet, private authService: AuthService, private af: AngularFirestore) {
    this.id$ = route.paramMap.pipe(map(params => params.get('id')));
    this.id$.subscribe(id => {
      document.addEventListener('click', (e: MouseEvent) => {
        if((<HTMLElement> event.target).tagName == "CITE") {
          if(!!articleService.get(id).sources) {
            this.showSources(articleService.get(id).sources, (<HTMLElement> event.target).innerHTML);
          }
        }
      });
      authService.user.subscribe(user => {
        if(!user) {
          return;
        }
        af.doc(`ratings/${user.uid}`).valueChanges().subscribe(ratings => {
          if(id in ratings) {
            this.rating = ratings[id];
          } else {
            this.rating = null;
          }
        });
      });
    });
  }

  showSources(_sources, tag) {
    const sources = _sources.filter(source => source.tag == tag.slice(1));
    if(sources.length == 0) {
      return;
    }
    this.bottomSheet.open(SourceSheetComponent, {
      data: {
        tag,
        sources
      }
    });
  }

  withSources(str) {
    return str.slice().replace(/\((#|\.)[a-zA-Z0-9_]+\)/g, function(match) {
      return `(<cite>${match.slice(1,-1)}</cite>)`;
    });
  }

  rate(id, uid, like) {
    this.af.doc(`ratings/${uid}`).set({[id]: like});
  }

}

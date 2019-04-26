import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticleService } from 'src/app/services/article.service';
import { load } from 'src/app/animations/load';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [
    load
  ]
})
export class UserComponent {

  user$: Observable<any>;
  uid: string;

  constructor(af: AngularFirestore, route: ActivatedRoute, private articleService: ArticleService) {
    route.paramMap.subscribe(params => {
      this.uid = params.get('uid');
      this.user$ = af.doc(`users/${this.uid}`).valueChanges();
    });
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles: Observable<any>;

  constructor(private af: AngularFirestore) {
    this.articles = af.collection('articles').snapshotChanges().pipe(map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data();
        return {
          id: action.payload.doc.id,
          ...data
        };
      });
    }));
  }

  get(id: string) {
    return this.af.doc('articles/' + id).valueChanges();
  }

}

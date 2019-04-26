import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles: any[];

  constructor(private af: AngularFirestore) {
    af.collection('articles').ref.get().then(articles => {
      this.articles = articles.docs.map(article => {
        return {
          id: article.id,
          ...article.data()
        };
      });
      articles.docs.forEach((article, index) => {
        af.doc('users/' + article.data().author).ref.get().then(user => {
          this.articles[index].authorData = user.data();
        });
      });
    });
  }

  get(id: string) {
    const f = (this.articles || []).filter(article => article.id == id);
    return f.length > 0 ? f[0] : null;
  }

  getByAuthor(uid: string) {
    return (this.articles || []).filter(article => article.author == uid);
  }

}

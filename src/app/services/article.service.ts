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
    af.collection('articles').snapshotChanges().subscribe(articles => {
      this.articles = articles.map(article => {
        return {
          id: article.payload.doc.id,
          ...article.payload.doc.data()
        };
      });
      articles.forEach((article, index) => {
        const data = article.payload.doc.data() as {author: string};
        if('author' in data) {
          af.doc('users/' + data.author).snapshotChanges().subscribe(authorDoc => {
            this.articles[index].authorData = authorDoc.payload.data();
          });
        }
      });
    });
  }

  fetch() {
    
  }

  get(id: string) {
    const f = (this.articles || []).filter(article => article.id == id);
    return f.length > 0 ? f[0] : null;
  }

  getByAuthor(uid: string) {
    return (this.articles || []).filter(article => article.author == uid);
  }

  update(id, newData: {}) {
    return this.af.doc('articles/' + id).update(newData);
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  _articles: any[];
  isSorted = false;

  constructor(private af: AngularFirestore) {
    af.collection('articles').snapshotChanges().subscribe(articles => {
      this._articles = articles.map(article => {
        return {
          id: article.payload.doc.id,
          ...article.payload.doc.data()
        };
      });
      articles.forEach((article, index) => {
        const data = article.payload.doc.data() as {author: string};
        if('author' in data) {
          af.doc('users/' + data.author).snapshotChanges().subscribe(authorDoc => {
            this._articles[index].authorData = authorDoc.payload.data();
          });
          af.collection('ratings').ref.where("article", "==", article.payload.doc.id).get().then(value => {
            if(value.docs.length == 0) {
              this._articles[index].rating = null;
            } else {
              const netLikes = value.docs.reduce((total, doc) => {
                return total + (doc.data().like ? 1 : -1);
              }, 0);
              this._articles[index].rating = netLikes/value.docs.length;
            }
          });
        }
      });
    });
  }

  get(id: string) {
    const f = (this._articles || []).filter(article => article.id == id);
    return f.length > 0 ? f[0] : null;
  }

  getByAuthor(uid: string) {
    return (this._articles || []).filter(article => article.author == uid);
  }

  update(id, newData: {}) {
    console.log(id);
    console.log(newData);
    return this.af.doc('articles/' + id).update(newData);
  }

  create(article: Article, uid) {
    return this.af.collection('articles').add(Object.assign(article, {
      date: new Date(),
      author: uid
    }));
  }

  delete(id) {
    return this.af.doc('articles/' + id).delete();
  }

  get articles() {
    if(!this.isSorted) {
      if((this._articles || []).length > 0 && this._articles[0].rating != undefined) {
        this._articles.sort(function(a, b) {
          return (b.rating == null ? 1 : b.rating) - (a.rating == null ? 1 : a.rating);
        });
        this.isSorted = true;
      } else {
        return null;
      }
    }
    return this._articles;
  }

}

import { Component, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent {

  @Input('state')
  state: Article

  constructor() { }

  addSource() {
    if(!this.state.sources) {
      this.state.sources = [];
    }
    this.state.sources.push({
      tag: "",
      description: "",
      url: ""
    });
  }

}

import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  smallScreen: Observable<boolean>;

  constructor(breakpointObserver: BreakpointObserver) {
    this.smallScreen = breakpointObserver.observe(['(max-width: 500px)']).pipe(
      map(state => state.matches)
    );
  }

}

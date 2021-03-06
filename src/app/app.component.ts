import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './services/auth.service';
import { load } from './animations/load';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    load
  ]
})
export class AppComponent {

  smallScreen: Observable<boolean>;

  constructor(breakpointObserver: BreakpointObserver, private authService: AuthService) {
    this.smallScreen = breakpointObserver.observe(['(max-width: 500px)']).pipe(
      map(state => state.matches)
    );
  }

}

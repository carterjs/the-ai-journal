import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { skip, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User, auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, router: Router) {
    // this.afAuth.authState.pipe(
    //   skip(1),
    //   map(user => !!user),
    //   tap(authState => {
    //     console.log(authState);
    //     if(authState) {
    //       // Signed in
    //       router.navigate(['/account']);
    //     } else {
    //       // Signed out
    //       router.navigate(['/auth']);
    //     }
    //   })
    // )
  }

  auth(email, password) {
    this.afAuth.auth.fetchSignInMethodsForEmail(email).then(providers => {
      if(providers.includes('password')) {
        this.signIn(email, password);
      } else {
        this.register(email, password);
      }   
    });
  }

  signIn(email, password) {
    console.log("sign in");
    this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }
  
  register(email, password) {
    this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email, password);
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

  get authenticated(): Observable<User> {
    return null;
  }

}

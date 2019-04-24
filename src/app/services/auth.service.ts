import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { skip, map, tap } from 'rxjs/operators';
import { Observable, empty } from 'rxjs';
import { User, auth } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<User>;
  data: Observable<any>;

  constructor(af: AngularFirestore, private afAuth: AngularFireAuth, router: Router) {
    this.user = afAuth.user;
    // Redirect on authState changes
    afAuth.authState.pipe(
      tap((user) => {
        if(!!user) {
          this.data = af.doc(`users/${user.uid}`).valueChanges();
        } else {
          this.data = empty();
        }
      }),
      skip(1),
      map(authState => !!authState)
    ).subscribe((newState) => {
      if(newState) {
        // Signed in
        router.navigate(['/']);
      } else {
        // Signed out
        router.navigate(['/auth']);
      }
    })
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
    this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }
  
  register(email, password) {
    this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email, password);
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { skip, map, tap } from 'rxjs/operators';
import { Observable, empty } from 'rxjs';
import { User, auth } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<User>;
  data: Observable<any>;

  constructor(private af: AngularFirestore, private afAuth: AngularFireAuth, router: Router, private snackBar: MatSnackBar) {
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
        router.navigate(['/account']);
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
    this.snackBar.open("Welcome back!", "Thanks!", {
      duration: 5000
    });
  }
  
  register(email, password) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(value => {
      this.af.doc('users/' + value.user.uid).set({
        name: value.user.email,
        bio: "Hi! I'm new here so I haven't written a bio yet."
      }).then(() => {
        this.snackBar.open("Account created.", "Dismiss", {
          duration: 5000
        });
      });
    });
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.snackBar.open("You've been signed out.", "Dismiss", {
        duration: 5000
      });
    });
  }

  updateData(uid, name, bio) {
    return this.af.doc('users/' + uid).update({name, bio});
  }

}

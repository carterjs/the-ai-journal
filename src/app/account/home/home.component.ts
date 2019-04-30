import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material';
import { load } from 'src/app/animations/load';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    load
  ]
})
export class HomeComponent {

  constructor(private authService: AuthService, private snackBar: MatSnackBar) { }
  
  save(uid, name, bio) {
    this.authService.updateData(uid, name, bio).then(() => {
      this.snackBar.open("Account data updated.", "Dismiss", {
        duration: 5000
      });
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  email = new FormControl('', Validators.compose([Validators.email, Validators.required]));
  password = new FormControl('', Validators.required);

  constructor(private authService: AuthService) { }

  submit() {
    this.authService.auth(this.email.value, this.password.value);
  }

}

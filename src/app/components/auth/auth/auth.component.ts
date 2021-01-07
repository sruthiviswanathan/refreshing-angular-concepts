import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode: boolean = true;
  isLoading: boolean;
  error: string =  null;
  authObservable: Observable<AuthResponseData>
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  authenticate(form: NgForm) {
    this.isLoading = true;
    if (!this.isLoginMode) {
      this.authObservable = this.authService.signUp(form.value);
    } else {
      this.authObservable = this.authService.login(form.value);
    }

    this.authObservable.subscribe((response) => {
      console.log(response);
      this.isLoading = false;
      this.router.navigate(['recipes']);
    }, error => {
      this.error = 'An error occurred: ' + error.error.error.message;
      this.isLoading = false;
    })
  }

  onClearError() {
    this.error = null;
  }

}

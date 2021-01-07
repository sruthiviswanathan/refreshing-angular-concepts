import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/components/auth/auth/user.model';
import { environment } from '../../../environments/environment';

export interface AuthResponseData {
  kind: string,
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logoutTimer: any;

  constructor(private http: HttpClient, private router: Router) { }
  user = new BehaviorSubject<User>(null);

  signUp(credentials: {email: string, password: string}) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+ environment.apiKey, 
    { ...credentials, returnSecureToken: true})
    .pipe(tap(responseData => {
      this.handleAuthentication(responseData);
    }));
  }

  login(credentials: {email: string, password: string}) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+environment.apiKey, 
    { ...credentials, returnSecureToken: true})
    .pipe(tap(responseData => {
      this.handleAuthentication(responseData);
    }));
  }

  autoLogin() {
    const user: {
      email: string,
      id: string,
      _token: string,
      _tokenExpirationDate: string,

    } = JSON.parse(localStorage.getItem('userData'));
    if (!user) {
      return;
    } else {
      const loadedUser = new User(user.email, user.id, user._token, new Date(user._tokenExpirationDate));
      if (loadedUser.token) {
        this.user.next(loadedUser);
        const expirationDuration = new Date(user._tokenExpirationDate).getTime() - new Date().getTime();
        this.autoLogout(expirationDuration);
      }
    }

  }

  autoLogout(expirationDuration: number) {
    this.logoutTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.logoutTimer) {
      clearTimeout(this.logoutTimer);
    }
    this.logoutTimer = null;
  }

  private handleAuthentication(responseData) {
    const expiration = new Date(new Date().getTime() + responseData.expiresIn * 1000);
    const user = new User(responseData.email, responseData.localId, responseData.idToken, expiration);
    this.user.next(user);
    this.autoLogout(responseData.expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }
}






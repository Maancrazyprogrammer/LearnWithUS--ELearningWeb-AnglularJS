import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiUrl = 'http://127.0.0.1:5000';
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {}

  signup(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/signup`, data, { headers });
  }

  verifyEmail(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/verify_email`, data, { headers });
  }

  resendVerificationCode(email: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/resend-verification-code`, { email }, { headers });
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        if (response && response.access_token) {
          // Store token in session storage
          this.setSession(response.access_token);
        }
      })
    );
  }

  private setSession(token: string) {
    const expiry = this.jwtHelper.getTokenExpirationDate(token);
    if (expiry) {
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('expires_at', expiry.getTime().toString());
    }
  }

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('expires_at');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    if (token) {
      return !this.jwtHelper.isTokenExpired(token);
    }
    return false;
  }

  getToken(): string | null {
    const token = sessionStorage.getItem('token');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return token;
    }
    this.logout();
    return null;
  }
  getUserRole(){
    return 'user';
  }
}

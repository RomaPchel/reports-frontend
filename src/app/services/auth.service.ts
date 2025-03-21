import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

interface DecodedToken {
  isAdmin: boolean;
  exp: number;
  iat: number;
  sub: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  async login(email: string, password: string): Promise<AuthResponse> {
    return firstValueFrom(this.http.post<AuthResponse>(`${this.apiUrl}/auth/login`, {
      email,
      password
    }));
  }

  async register(email: string, password: string): Promise<AuthResponse> {
    return firstValueFrom(this.http.post<AuthResponse>(`${this.apiUrl}/auth/register`, {
      email,
      password
    }));
  }

  async refreshToken(refreshToken: string): Promise<AuthResponse> {
    return firstValueFrom(this.http.post<AuthResponse>(`${this.apiUrl}/auth/refresh`, {
      refreshToken
    }));
  }

  setTokens(accessToken: string, refreshToken: string) {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  }

  getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  getRefreshToken(): string | null {
    return localStorage.getItem('refreshToken');
  }

  clearTokens() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken'); 
  }

  isAdmin(): boolean {
    const token = this.getAccessToken();
    if (!token) return false;
    
    try {
      const payload = token.split('.')[1];
      const decoded = JSON.parse(atob(payload)) as DecodedToken;
      console.log(decoded);
      return decoded.isAdmin === true;
    } catch (error) {
      console.error('Error decoding token:', error);
      return false;
    }
  }
}
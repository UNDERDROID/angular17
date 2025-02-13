import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _username: string = '';  // Store the username to track logged-in status

    constructor() { }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    // Save token to localStorage (or sessionStorage)
    setAuthToken(token: string): void {
        localStorage.setItem('authToken', token);  // Save token to localStorage
    }

    // Get token from localStorage
    getAuthToken(): string | null {
        return localStorage.getItem('authToken');  // Returns the stored token or null if not found
    }

    // Remove token from localStorage (on logout)
    removeAuthToken() {
        localStorage.removeItem('authToken');
    }

    // Method to simulate login (could be replaced with real authentication)
    login(username: string) {
        this._username = username;
    }

    logout() {
        this._username = '';  // Clear the username on logout
    }
}

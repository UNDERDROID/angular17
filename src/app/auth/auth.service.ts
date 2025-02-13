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

    // Method to simulate login (could be replaced with real authentication)
    login(username: string) {
        this._username = username;
    }

    logout() {
        this._username = '';  // Clear the username on logout
    }
}

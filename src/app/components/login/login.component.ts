import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.authService.login(this.username);
      this.router.navigate(['/pipes']);
      this.authService.setAuthToken('authToken');
    } else {
      alert('Login Failed');
    }
  }
}

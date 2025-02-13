import { Component } from '@angular/core';
import { user } from './user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  isVisible: boolean = true;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  users: user[] = [{
    firstName: '',
    lastName: '',
    email: '',
  },]

  addUser() { }
}

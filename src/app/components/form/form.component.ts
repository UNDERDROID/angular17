import { Component } from '@angular/core';
import { user } from './user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  isVisible: boolean = true;
  firstName: string = '';
  lastName: string = '';
  email: string = '';

  username: string = '';
  password: string = '';

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  onSubmit() {
    console.log('Form Submitted');
  }

  users: user[] = [{
    firstName: '',
    lastName: '',
    email: '',
  },]

  addUser() { }
}

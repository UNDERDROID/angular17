import { Component } from '@angular/core';
import { Rooms, RoomList } from './rooms';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
  standalone: false
})
export class RoomsComponent {
  constructor(private authService: AuthService, private router: Router, private httpClient: HttpClient) { }
  role: string = 'admin';


  //Hotel Object
  hotel1: Rooms = {
    total: 100,
    booked: 50,
    available: 3
  }

  //Room List
  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe',
      roomPrice: 100,
      amenities: ['TV', 'AC', 'Mini Fridge']
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe',
      roomPrice: 200,
      amenities: ['TV', 'AC', 'Mini Fridge']
    },
    {
      roomNumber: 3,
      roomType: 'Private Suite',
      roomPrice: 300,
      amenities: ['TV', 'AC', 'Wi-Fi']
    }
  ]
  username: string = this.authService.username;
  logout() {
    this.authService.logout();
    this.authService.removeAuthToken();
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {
    // Make a test HTTP request to trigger the interceptor
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        console.log('Response:', response);
      });
  }
}



import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  date: Date = new Date(2 / 12 / 2025);
  stringTransform: string = 'HELLO WORLD';
  currency: number = 100;
  percentage: number = 0.5;
}

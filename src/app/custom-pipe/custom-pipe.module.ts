import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomPipeComponent } from './custom-pipe.component';
import { FormsModule } from '@angular/forms';
import { DecimalToCommaPipe } from '../customPipes/decimal-to-comma.pipe';

const routes: Routes = [
  { path: '', component: CustomPipeComponent }
];

@NgModule({
  declarations: [CustomPipeComponent, DecimalToCommaPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class CustomPipeModule { }

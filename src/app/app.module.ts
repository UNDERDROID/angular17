import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './components/directives/rooms/rooms.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { BikesComponent } from './components/component-communication/bikes/bikes.component';
import { BikesListsComponent } from './components/component-communication/bikes-lists/bikes-lists.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    PipesComponent,
    LifecycleComponent,
    BikesComponent,
    BikesListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

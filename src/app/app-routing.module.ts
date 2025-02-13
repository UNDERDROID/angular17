import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    {
        path: 'pipes',
        loadChildren: () => import('./components/pipes/pipes.module').then(m => m.PipesModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'rooms',
        loadChildren: () => import('./components/directives/rooms/rooms.module').then(m => m.RoomsModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'custom-pipe',
        loadChildren: () => import('./custom-pipe/custom-pipe.module').then(m => m.CustomPipeModule),
        canActivate: [AuthGuard]
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
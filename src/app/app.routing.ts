import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { PersonalCardComponent } from './personal/personal.component';


const routes: Routes = [
    // home
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    // path has no any match
    {
        path: '**',
        redirectTo: ''
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule {

}


export const components = [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
    PersonalCardComponent
];

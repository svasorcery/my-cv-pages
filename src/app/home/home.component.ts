import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: [ './home.component.css' ]
})
export class HomeComponent {
    skills = [
        { name: '.NET Core', rating: 4 },
        { name: 'ASP.NET MVC', rating: 4 },
        { name: 'Angular 2-6', rating: 5 },
        { name: 'T-SQL', rating: 3 },
        { name: 'MongoDB', rating: 3 },
        { name: 'Docker', rating: 2 },
    ];
}

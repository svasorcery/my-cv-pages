import { Component } from '@angular/core';

import { Person } from '../app.models';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: [ './home.component.css' ]
})
export class HomeComponent {
    experience = {
        title: 'Experience',
        items: [
            {
                name: 'Fullstack Web Developer',
                where: 'TEC electronics',
                startedAt: new Date(2017, 12, 5),
                finishedAt: null,
                experiences: [
                    'Created the several projects on ASP.NET Core and Angular'
                ]
            }
        ]
    };

    skills = [
        { name: '.NET Core', rating: 4 },
        { name: 'ASP.NET MVC', rating: 4 },
        { name: 'Angular 2-6', rating: 5 },
        { name: 'T-SQL', rating: 3 },
        { name: 'MongoDB', rating: 3 },
        { name: 'Docker', rating: 2 },
    ];
}

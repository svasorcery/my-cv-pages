import { Component } from '@angular/core';

import { Person } from '../app.models';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: [ './home.component.css' ]
})
export class HomeComponent {
    personal = {
        firstName: 'Vladimir',
        lastName: 'Sinyavsky',
        birthDate: new Date(1989, 8, 15),
        gender: 'Male',
        location: 'Russian Federation, Dubna',
        phone: '+7(9**)***-**-**',
        email: 'sva.sorcery@gmail.com',
        photoUrl: 'https://avatars2.githubusercontent.com/u/20383833?s=460&v=4'
    } as Person;

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

import { Component, Input } from '@angular/core';

import { Person } from '../app.models';

@Component({
    selector: 'personal-card',
    templateUrl: 'personal.component.html',
    styleUrls: [ './personal.component.css' ]
})
export class PersonalCardComponent {
    @Input() value: Person;
    title: string = 'Personal info';

    constructor() { }
}

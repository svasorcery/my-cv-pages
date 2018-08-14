import { Component, Input } from '@angular/core';

import { Position } from '../app.models';

@Component({
    selector: 'timeline-group',
    templateUrl: 'group.component.html'
})
export class TimelineGroupComponent {
    @Input() title: string;
    @Input() positions: Position[];

    constructor() { }
}

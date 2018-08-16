import { Component, Input } from '@angular/core';

@Component({
    selector: 'group-card',
    template: `
        <h2>
            <i [class]="'fa fa-' + icon"></i>
            {{ title }}
        </h2>
        <div>
            <ng-content></ng-content>
        </div>
    `
})
export class GroupCardComponent {
    @Input() title: string = '';
    @Input() icon: string = 'check';

    constructor() { }
}

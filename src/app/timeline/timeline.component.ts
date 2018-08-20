import { Component, Input } from '@angular/core';

@Component({
    selector: 'timeline',
    template: `
        <div *ngIf="experience">
            <timeline-group
                [title]="experience.title"
                [positions]="experience.items">
            </timeline-group>
        </div>
    `
})
export class TimelineComponent {
    @Input() experience: any;

    constructor() { }
}

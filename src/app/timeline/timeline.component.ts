import { Component } from '@angular/core';

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
    public experience = {
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

    constructor() { }
}

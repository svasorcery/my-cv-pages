import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineComponent } from './timeline.component';
import { TimelineGroupComponent } from './group.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TimelineComponent,
        TimelineGroupComponent
    ],
    providers: [

    ],
    exports: [
        TimelineComponent,
        TimelineGroupComponent
    ]
})
export class TimelineModule { }

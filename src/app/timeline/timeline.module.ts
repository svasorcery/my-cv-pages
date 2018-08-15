import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { TimelineComponent } from './timeline.component';
import { TimelineGroupComponent } from './group.component';

@NgModule({
    imports: [
        SharedModule
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

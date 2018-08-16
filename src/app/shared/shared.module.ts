import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorageService } from './services/storage.service';
import { LanguageService } from './services/language.service';

import { RatingStarComponent, RatingBarComponent } from './components/rating-bar.component';
import { GroupCardComponent } from './components/group-card.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        RatingStarComponent,
        RatingBarComponent,
        GroupCardComponent
    ],
    providers: [
        StorageService,
        LanguageService
    ],
    exports: [
        CommonModule,
        RatingBarComponent,
        GroupCardComponent
    ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorageService } from './services/storage.service';
import { LanguageService } from './services/language.service';

import { RatingStarComponent, RatingBarComponent } from './components/rating-bar.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        RatingStarComponent,
        RatingBarComponent
    ],
    providers: [
        StorageService,
        LanguageService
    ],
    exports: [
        CommonModule,
        RatingBarComponent
    ]
})
export class SharedModule { }

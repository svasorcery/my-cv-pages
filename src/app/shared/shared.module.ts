import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorageService } from './services/storage.service';
import { LanguageService } from './services/language.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
    ],
    providers: [
        StorageService,
        LanguageService
    ],
    exports: [
        CommonModule
    ]
})
export class SharedModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StorageService } from './storage.service';
import { LanguageService } from './language.service';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        StorageService,
        LanguageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';

import { LanguageService, Language } from './language.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    langListSource: Language[];

    constructor(private _lang: LanguageService) {
        this.langListSource = Language.all;
    }

    public get currentLang(): Language {
        return this._lang.current;
    }

    public changeLang = (code: string) => {
        if (!code) { return; }
        this._lang.change(code);
    }
}

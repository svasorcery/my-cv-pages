import { Component } from '@angular/core';

import { LanguageService, Language } from '../services/language.service';

@Component({
    selector: 'nav-menu',
    templateUrl: 'nav-menu.component.html',
    styleUrls: [ './nav-menu.component.css' ]
})
export class NavMenuComponent {
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

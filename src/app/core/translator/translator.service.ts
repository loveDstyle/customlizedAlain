import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SettingsService } from '../services/settings.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TranslatorService {

    private _default: string = 'en';

    private _langs = [
        { code: 'en', text: 'English' },
        { code: 'zh-CN', text: '中文' }
    ];

    constructor(settings: SettingsService, private translate: TranslateService) {
        this._default = settings.layout.lang || translate.getBrowserLang();
        const lans = this._langs.map(item => item.code);
        if (!lans.includes(this._default)) this._default = lans[0];
        translate.addLangs(lans);
        translate.setDefaultLang(this._default);
    }

    use(lang: string = null) {
        this.translate.use(lang || this.translate.getDefaultLang());
    }

    get langs() {
        return this._langs;
    }

    get(key: string | string[], params: Object = null): Observable<string | any> {
        return this.translate.get(key, params);
    }

}

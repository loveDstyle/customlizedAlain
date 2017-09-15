/**
 * Created by wuhao on 2017/9/13.
 */
import { Injectable } from '@angular/core';
import { ShareService } from '@core/services/share.service';
import {BaseService} from '@core/services/base.service';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import { NzMessageService } from 'ng-zorro-antd';


@Injectable()
export class LoginService extends BaseService {
    constructor(private _message: NzMessageService,
                private _router: Router,
                private _shareService: ShareService) {
        super(_message, _router, _shareService);
    }

    login(username: string, password: string): Observable<string> {
        return Observable.fromPromise(this._shareService.getAlfApiInstance().login(username, password))
            .catch((error: Error) => this.handleError(error));
    }
}

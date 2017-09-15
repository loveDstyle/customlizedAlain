import { Component } from '@angular/core';
import { NzMessageService } from "ng-zorro-antd";
import { SettingsService } from "@core/services/settings.service";
import { ShareService } from "@core/services/share.service";
import { MenuService } from '@core/services/menu.service';

@Component({
  selector   : 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls  : ['./sidebar.component.scss']
})
export class SidebarComponent {
    constructor(
        private _message: NzMessageService,
        public menuSrv: MenuService,
        public settings: SettingsService,
        private shareService: ShareService) {
    }

    show(msg: string) {
        this._message.success(msg);
    }

    closeMenu() {
        this.settings.setLayout('collapsed', false);
    }

    logout() {
        this.shareService.invalidateSession();
        this._message.success('您已登出！');
    }
}

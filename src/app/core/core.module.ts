import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from "./module-import-guard";

import { SettingsService } from "./services/settings.service";
import { MenuService } from "./services/menu.service";
import { ThemesService } from "./services/themes.service";
import { TranslatorService } from "./translator/translator.service";
import { ScrollService } from "./services/scroll.service";
import { ColorsService } from "./services/colors.service";
import { ShareService } from "./services/share.service";
import {AuthGuardEcm} from './guards/auth-guard-ecm.service';
import { BaseService } from "./services/base.service";

import { ACLService } from './acl/acl.service';


@NgModule({
  imports: [
  ],
  providers: [
    ThemesService,
    SettingsService,
    MenuService,
    TranslatorService,
    ScrollService,
    ColorsService,
      ACLService,




      ShareService,
      AuthGuardEcm,
      BaseService,
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SettingsService } from '@core/services/settings.service';
import { LoginService } from './login.service';
import { LocalStorageService } from 'angular-web-storage';
import { Ticket } from './login.model';
import {ShareService} from "@core/services/share.service";

@Component({
  selector: 'app-pages-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
    providers: [LoginService]
})
export class LoginComponent {
  valForm: FormGroup;

  constructor(public settings: SettingsService,
              private fb: FormBuilder,
              private router: Router,
              private loginService: LoginService,
            private shareService: ShareService) {
    this.valForm = fb.group({
      username: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      remember_me: [null]
    });
  }

  submit() {
    for (const i in this.valForm.controls) {
      this.valForm.controls[i].markAsDirty();
    }
    if (this.valForm.valid) {
      this.loginService.login(this.valForm.controls['username'].value, this.valForm.controls['password'].value)
          .subscribe((success: string) => {
            this.shareService.setTicketEcm(success);
            const lastRequestUrl = sessionStorage.getItem('redirectUrl');
            this.router.navigateByUrl(lastRequestUrl ? lastRequestUrl : 'dashboard/v1');
          },
          error => {
            console.log(error);
          });
    }
  }

}

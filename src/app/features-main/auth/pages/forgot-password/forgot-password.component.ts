import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  url: string;
  constructor(private router: Router) {
    this.url = this.router.url
  }

  /**
   * open url
   * @param url open url
   */
  openUrl(url: string) {
    this.router.navigateByUrl(url).then();
  }
}

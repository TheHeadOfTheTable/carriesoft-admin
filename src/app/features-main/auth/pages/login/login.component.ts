import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
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

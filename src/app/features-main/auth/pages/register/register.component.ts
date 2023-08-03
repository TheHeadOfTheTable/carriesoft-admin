import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
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

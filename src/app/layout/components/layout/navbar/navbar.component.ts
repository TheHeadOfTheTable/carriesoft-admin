import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { ListLanguageArray } from 'src/app/core/arrays/list-language.array';
import { LanguageService } from 'src/app/core/services/language.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  url: string;
  cookieValue: string = "";
  countriesName: any;
  flagsValue: any
  listLang = ListLanguageArray;
  valueSet: string = "";

  constructor(private router: Router, private translate: TranslateService, public languageService: LanguageService,
    public _cookiesService: CookieService) {
    this.url = this.router.url
  }
  ngOnInit(): void {
    this.cookieValue = this._cookiesService.get('lang');
    const lang = this.listLang.filter(el => el.lang === this.cookieValue);

    console.log(lang);
    this.countriesName = lang.map(element => element.text);
    if (lang.length === 0) this.valueSet = "assets/images/flags/french.jpg";
    else this.flagsValue = lang.map(element => element.flag)
  }
  /**
   * open url
   * @param url open url
   */
  openUrl(url: string) {
    this.router.navigateByUrl(url).then();
  }

  setLanguage(text: string, lang: string, flag: string) {
    this.countriesName = text;
    this.flagsValue = flag;
    this.cookieValue = lang;
    this.languageService.setLanguage(lang);
  }
}

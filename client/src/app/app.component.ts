import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ProfileService } from './services/profile/profile.service';
import { RestCounterService } from './utility/rest_counter/rest-counter.service';
import { I18nService } from './services/i18n/i18n.service';

import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'profile-starter';

  private basePath: string = environment.basePath;
  private profilePath: string = this.basePath + environment.profilePath;
  private i18nKeyStorePath: string = this.basePath + environment.i18nKeyStorePath;

  public basicInfo: any;
  public contactInfo: any;
  public skillsInfo: any;
  public bioInfo: any;


  public isInitiated: boolean = false;

  constructor(private http: HttpClient,
    private i18nService: I18nService,
    private profileService: ProfileService,
    private restCounterService: RestCounterService) {
  }

  ngOnInit(): void {
    this.loadData()
  }

  initiate() {
    this.basicInfo = this.profileService.get("basic_info");
    this.contactInfo = this.profileService.get("contact_info");
    this.skillsInfo = this.profileService.get("skills_info")
    this.bioInfo = this.profileService.get("bio_info")

    this.isInitiated = true;
  }

  public loadData() {

    let counter = this.restCounterService.getCounterMethod(2, this.initiate.bind(this))

    this.loadProfileInfo(counter);
    this.loadI18nKeyStore(counter);
  }

  public loadProfileInfo(counter: any) {
    let component = this;
    this.http.get(this.profilePath).subscribe(data => {
      component.profileService.init(data);
      counter()
    });
  }

  public loadI18nKeyStore(counter: any) {
    let component = this;
    this.http.get(this.i18nKeyStorePath).subscribe(data => {
      component.i18nService.init(data);
      counter();
    });
  }
}

import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SanitizeHTMLPipe } from './pipes/sanitize-html.pipe';
import { DatetimePipe } from './pipes/datetime.pipe';
import { I18nPipe } from './pipes/i18n.pipe'
import { SkillsInfoComponent } from './components/skills-info/skills-info.component';
import { HttpClientModule } from '@angular/common/http';
import { BioInfoComponent } from './components/bio-info/bio-info.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicInfoComponent,
    ContactInfoComponent,
    SkillsInfoComponent,
    SanitizeHTMLPipe,
    SanitizeHTMLPipe,
    DatetimePipe,
    I18nPipe,
    BioInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

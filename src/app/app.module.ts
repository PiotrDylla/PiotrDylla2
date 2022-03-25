import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FirstContainerComponent } from './introduce/first-container.component';
import { SecondContainerComponent } from './mySkills/second-container.component';
import { ThirdContainerComponent } from './myWork/third-container.component';
import { FourthContainerComponent } from './aboutMe/fourth-container.component';
import { FifthContainerComponent } from './contactMe/fifth-container.component';
import { ImprintComponent } from './imprint/imprint.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FirstContainerComponent,
    SecondContainerComponent,
    ThirdContainerComponent,
    FourthContainerComponent,
    FifthContainerComponent,
    ImprintComponent,
    FooterComponent,
    AboutComponent,
    PrivacyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

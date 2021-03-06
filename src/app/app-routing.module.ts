import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

import { ImprintComponent } from './imprint/imprint.component';
import { MenuComponent } from './menu/menu.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [

  { path: '', component: AboutComponent},
  { path: 'imprint', component: ImprintComponent},
  { path: 'privacy', component:PrivacyComponent},
  { path: 'footer', component: FooterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImprintComponent } from './imprint/imprint.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', component: MenuComponent},
  { path: '/imprint', component: ImprintComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

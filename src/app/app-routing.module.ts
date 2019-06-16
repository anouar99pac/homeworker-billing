import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { HomeComponent } from './features/home/home.component';
import { AnnexesComponent } from './features/annexes/annexes.component';
import { SettingsComponent } from './features/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', redirectTo: '', pathMatch: 'full', data: { reuse: true } },
      { path: 'index', redirectTo: '', pathMatch: 'full', data: { reuse: true } },
      { path: 'dictionnary', component: AnnexesComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

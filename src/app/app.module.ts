import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import { SettingsService } from './core/services/settings.service';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { HomeComponent } from './features/home/home.component';
import { PriceBuilderService } from './core/services/price-builder.service';
import { AnnexesComponent } from './features/annexes/annexes.component';
import { SettingsComponent } from './features/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    AnnexesComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
            SettingsService,
            PriceBuilderService
          ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { materialModules } from './imports/materialNg';
import { BackToTopComponent } from './directives/back-to-top/back-to-top.component';
import { RoundPipe } from './pipes/round.pipe';
import { EurosPipe } from './pipes/euros.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    materialModules
  ],
  declarations: [
    RoundPipe,
    EurosPipe,
    BackToTopComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    materialModules,
    RoundPipe,
    EurosPipe,
    BackToTopComponent
  ]
})
export class SharedModule { }

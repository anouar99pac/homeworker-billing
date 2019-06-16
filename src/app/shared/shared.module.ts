import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { materialModules } from './imports/materialNg';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    materialModules
  ],
  declarations: [
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    materialModules
  ]
})
export class SharedModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialComponentsModule } from './material-components/material-components.module';
import { HeaderComponent } from './components/header/header.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { ReactiveFormsModule } from '@angular/forms';

const components = [
  HeaderComponent,
  TextInputComponent
];

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialComponentsModule,
    FlexLayoutModule,
    components
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcurmbWidget } from './breadcrumb/breadcrumb.widget';
import { StatusWidget } from './status/status.widget';
import { HttpClientModule } from '@angular/common/http';

const components = [
  BreadcurmbWidget,
  StatusWidget
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: components,
  exports: components
})

export class KAMI_WIDGET { }

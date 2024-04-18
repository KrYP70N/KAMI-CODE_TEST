import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BreadcurmbWidget } from './breadcrumb/breadcrumb.widget';
import { StatusWidget } from './status/status.widget';
import { PostWidget } from './posts/posts.widget';
import { KAMI_UI } from '../kami-ui/kami-ui.module';

const components = [
  BreadcurmbWidget,
  StatusWidget,
  PostWidget
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    KAMI_UI
  ],
  declarations: components,
  exports: components
})

export class KAMI_WIDGET { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard.component';
import { DashboardRoutingModule } from './dashboard-route.module';
import { KAMI_UI } from '../../module/kami-ui/kami-ui.module';
import { KAMI_WIDGET } from '../../module/widget/widget.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    KAMI_UI,
    KAMI_WIDGET,
    DashboardRoutingModule
  ],
  providers:[
  ]
})
export class DashboardModule { }

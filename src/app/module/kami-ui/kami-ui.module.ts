import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';

const components = [
  CardComponent,
  TableComponent
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: components,
  exports: components
})

export class KAMI_UI { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { PrimaryLayout } from './layout/layout.component';
import { FieldsetComponent } from './fieldset/fieldset.component';

const components = [
  CardComponent,
  TableComponent,
  PrimaryLayout,
  FieldsetComponent
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: components,
  exports: components
})

export class KAMI_UI { }

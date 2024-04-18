import { Component, Input } from "@angular/core";

@Component({
  selector: 'fieldset',
  templateUrl: './fieldset.component.html',
  styleUrl: './fieldset.component.scss'
})

export class FieldsetComponent {
  @Input() fieldName: string = ''
}

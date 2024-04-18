import { Component, Input } from "@angular/core";
import { env } from "../../../env/env";

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.widget.html',
  styleUrl: './breadcrumb.widget.scss',
})

export class BreadcurmbWidget {
  @Input() page!: string
  appName = env.app_name
}

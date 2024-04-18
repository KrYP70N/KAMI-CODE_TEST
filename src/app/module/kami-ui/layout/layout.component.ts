import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { env } from "../../../env/env";
import { BreadcurmbWidget } from "../../widget/breadcrumb/breadcrumb.widget";

@Component({
  selector: 'primary-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})

export class PrimaryLayout implements AfterViewInit {

  @ViewChild('drawer', { static: false }) drawer!: ElementRef;

  active: boolean = env.drawer_open;

  constructor() {

  }

  ngAfterViewInit() {
    this.drawer.nativeElement.addEventListener('click', () => {
      this.active = !this.active
    })
  }

}

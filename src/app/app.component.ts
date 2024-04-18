import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KAMI_UI } from './module/kami-ui/kami-ui.module';
import { KAMI_WIDGET } from './module/widget/widget.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, KAMI_UI, KAMI_WIDGET],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'KAMI_CODE_TEST';
}

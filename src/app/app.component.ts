import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KAMI_UI } from './module/kami-ui/kami-ui.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KAMI_UI],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'KAMI_CODE_TEST';
}

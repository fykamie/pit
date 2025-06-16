import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PitComponent } from "./components/pit/pit.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {

}

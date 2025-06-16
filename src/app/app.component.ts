import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PitBoardComponent } from "./components/pit-board/pit-board.component";
import { CommonModule } from '@angular/common';
import { MsgComponent } from "./components/msg/msg.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, PitBoardComponent, MsgComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {

}

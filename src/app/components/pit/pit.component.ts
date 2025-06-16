import { Component, Input, OnInit } from '@angular/core';
import { Pit } from '../../classes/pit';

@Component({
  selector: 'app-pit',
  standalone: true,
  imports: [],
  templateUrl: './pit.component.html',
  styleUrl: './pit.component.less'
})
export class PitComponent{

  @Input() pit!: Pit;

   clicking(click: MouseEvent) {
    
    if (click.button == 2) {
      this.pit.isTagged = !this.pit.isTagged;
    }
    else if (click.button == 1) {
      let text = this.pit.value == "" ?
          "X" : "";
      this.pit = new Pit(text);
    }
    else
      this.pit.isChosen = true;

  }

  getPitValue() {
    return this.pit.value;
    // return this.pit.isChosen ?
    //    this.pit.value :
    //    ""
  }
  

}

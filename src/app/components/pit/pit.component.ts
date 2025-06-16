import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() activated = new EventEmitter<void>();

   clicking(click: MouseEvent) {
    
    if (click.button == 2) {
      this.pit.isTagged = !this.pit.isTagged;
    }
    else if (click.button == 1) {
      this.activated.emit();
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

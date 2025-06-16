import { Component } from '@angular/core';
import { Pit } from '../../classes/pit';

@Component({
  selector: 'app-pit',
  standalone: true,
  imports: [],
  templateUrl: './pit.component.html',
  styleUrl: './pit.component.less'
})
export class PitComponent {
  public pit: Pit = new Pit();

   clicking(click: MouseEvent) {
    
    if (click.button == 2) {
      this.pit.isTagged = !this.pit.isTagged;
    }
    else
      this.pit.isChosen = true;

  }

  getPitValue() {
    return this.pit.isChosen ?
       this.pit.value :
       ""
  }
  

}

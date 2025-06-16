import { Component, EventEmitter, Input, Output} from '@angular/core';
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
  @Output() chosed: EventEmitter<void> = new EventEmitter();

   clicking(click: MouseEvent) {
    
    if (click.button == 2) {
      this.pit.isTagged = !this.pit.isTagged;
    }
    else if(click.button == 0) {
      this.pit.isChosen = true;
      this.pit.isTagged = false;

      this.chosed.emit();
    }

  }

  getPitValue() {
    return this.pit.isChosen ?
       this.pit.value :
       ""
  }
  

}

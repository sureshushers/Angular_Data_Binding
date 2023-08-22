import { Component } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {
  newServerName = '';
  newServerContent = '';
  
  onAddServer() {
    alert('Server is clicked');
  }

  onAddBluePrint() {
    alert('Blueprint is clicked');
  }
}

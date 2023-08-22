import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {
  /***
   * Section 3: Passing the data from the cockpit to parent which is App Component
   * 1. Set a property that could emit an custom event
   * 2. Mark that property using @Output() decorator
   * 3. Emit the event in the button click method
   */

  @Output() emitServerCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();

  @Output() emitBluePrintCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();

  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.emitServerCreated.emit({
      name: this.newServerName,
      content: this.newServerContent,
    });
  }

  onAddBluePrint() {
    this.emitBluePrintCreated.emit({
      name: this.newServerName,
      content: this.newServerContent,
    });
  }
}

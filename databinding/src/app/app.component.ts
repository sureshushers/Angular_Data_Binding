import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'Potomac', content: 'Batman' },
    { type: 'blueprint', name: 'Michigan', content: 'Joker' },
  ];

  onServerAdded(event: { name: string; content: string }) {
    this.serverElements.push({
      type: 'server',
      name: event.name,
      content: event.content,
    });
  }

  onBluePrintAdded(event: { name: string; content: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: event.name,
      content: event.content,
    });
  }
}

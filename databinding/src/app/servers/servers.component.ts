import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  //To make the below element visible in other component, make it visible using Input() decorator.
  @Input() element!: { type: string; name: string; content: string };

  constructor() {}
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  //Section: 1
  //To make the below element visible in other component, make it visible using Input() decorator.
  //Important: The INPUT() decorator is used to get the data from the parent component.
  // @Input() element!: { type: string; name: string; content: string };
  //Section: 2
  // Passing alias as the element name in order to not expose the actual element.
  // For that, include the alias name inside the @Input() decorator like this
  //@Input(serverElement)...

  @Input('serverElement') element!: {
    type: string;
    name: string;
    content: string;
  };
  constructor() {}
}

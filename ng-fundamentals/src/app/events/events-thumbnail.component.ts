import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: 'events-thumbnail.component.html',
})
export class EventsThumbnailComponent {
  @Input() event: any;
  someProperty: String = 'Child Name';

  logFoo(): void {
    console.log('foo');
  }
}

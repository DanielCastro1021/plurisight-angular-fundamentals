import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: 'events-thumbnail.component.html',
  styles: [
    `
      .bold {
        font-weight: bold;
      }
      .green {
        color: #003300 !important;
      }
      .thumbnail {
        min-height: 210px;
      }
      .pad-left {
        margin-left: 10px;
      }
      .well div {
        color: #bbb;
      }
    `,
  ],
})
export class EventsThumbnailComponent {
  @Input() event: any;

  logFoo(): void {
    console.log('foo');
  }

  getStartTimeClassObject() {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return { green: isEarlyStart, bold: isEarlyStart };
  }
  getStartTimeClassString() {
    if (this.event && this.event.time === '8:00 am') return 'green bold';
    else return '';
  }
  getStartTimeClassArray() {
    if (this.event && this.event.time === '8:00 am') return ['green', 'bold'];
    else return [];
  }
}

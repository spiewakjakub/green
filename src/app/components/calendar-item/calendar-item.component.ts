import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar-item',
  templateUrl: './calendar-item.component.html',
  styleUrls: ['./calendar-item.component.scss']
})
export class CalendarItemComponent implements OnInit {

  constructor() { }

  @Input() item: CalendarItem;

  ngOnInit() {
  }

}

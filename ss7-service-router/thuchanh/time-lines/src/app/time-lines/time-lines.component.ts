import {Component, OnInit} from '@angular/core';
import {DateUtilService} from "../service/date-util.service";

@Component({
  selector: 'app-time-lines',
  templateUrl: './time-lines.component.html',
  styleUrls: ['./time-lines.component.css']
})
export class TimeLinesComponent implements OnInit {
  output = "";

  constructor(private dateUtilService: DateUtilService) {
  }

  ngOnInit(): void {
  }

  onChange(value: string) {
    this.output = this.dateUtilService.getDiffToNow(value);
  }
}

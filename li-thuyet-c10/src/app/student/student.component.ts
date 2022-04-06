import {Component, OnInit} from '@angular/core';
import {IStudent} from "../../models/IStudent";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {


  student: IStudent = {
    id: 1,
    name: "Nam",
    age: 18,
    address: "DN",
    mark: 10

  }

  color: string = "red";
  constructor() {
  }

  ngOnInit(): void {
  }

  checkMark(value: string) {
    this.student.mark = Number(value);
  }


  checkColor(value: string) {
    this.color=value;
  }
}

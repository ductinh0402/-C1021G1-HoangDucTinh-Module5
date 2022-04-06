import { Component, OnInit } from '@angular/core';
import {IStudent} from "../../models/IStudent";
import {StudentDao} from "../Dao/StudentDao";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
       students:IStudent[]=StudentDao.students;
  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validator, Validators} from "@angular/forms";
import {StudentDao} from "../Dao/StudentDao";

import {Observable} from "rxjs";
import {Router} from "@angular/router";
import validate = WebAssembly.validate;



@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  studentCreate:FormGroup;


  constructor() {
   this.studentCreate = new FormGroup({
      id: new FormControl('',[Validators.required,Validators.maxLength(2)]),
      name: new FormControl('',[Validators.required,Validators.maxLength(5)]),
      age: new FormControl('',[Validators.required,Validators.min(18)]),
      address: new FormControl('',[Validators.maxLength(5),Validators.required]),
      mark: new FormControl('',[Validators.min(1),Validators.max(10)])
    });
  }

  ngOnInit(): void {
  }

  saveCreate() {
    StudentDao.students.unshift(this.studentCreate.value);
  // let a:Observable<void>
  //   a.subscribe(next=>{
  //       this.router.navigateByUrl('/student-list');
  //   })

  }
}

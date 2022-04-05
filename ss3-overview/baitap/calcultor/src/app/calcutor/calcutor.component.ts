import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calcutor',
  templateUrl: './calcutor.component.html',
  styleUrls: ['./calcutor.component.css']
})
export class CalcutorComponent implements OnInit {

  num1:number;
  num2:number;
  result: number;
  checkNumber1(value: string) {
    this.num1=Number(value);
  }
  checkNumber2(value: string) {
    this.num2=Number(value);
  }
  showMessage(operator: string) {
    switch (operator) {
      case ("add"):
        this.result =this.num1+this.num2;
        break;
      case ("sub"):
        this.result =this.num1-this.num2;
        break;
      case ("mul"):
        this.result =this.num1*this.num2;
        break;
      case ("div"):
        this.result =this.num1/this.num2;
        break;
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }





}

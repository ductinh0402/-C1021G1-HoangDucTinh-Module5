import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {
  // @Input()
  // count:number;
  constructor() { }

  ngOnInit(): void {
  }
  count=0;
  @Output()
  countChanged: EventEmitter<number>=new EventEmitter<number>();
  increment() {
    this.count++;
    // this.countChanged.emit(this.count);
  }

  decrement() {
    this.count--;
    // this.countChanged.emit(this.count);
  }
  ngOnChanges(changes: SimpleChanges): void {
    // for (const changesKey in changes) {
    //   if (changesKey=='count'){
    //     console.log('Previous',changes[changesKey].previousValue)
    //     console.log('Current',changes[changesKey].currentValue)
    //     console.log('FirstChange',changes[changesKey].firstChange)
    //   }
    // }
  }

}

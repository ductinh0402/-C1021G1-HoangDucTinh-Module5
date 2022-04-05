import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  arr = ['blue', 'green', 'olive','white','black'];
  color = 'blue';
  width="500px";
  height="500px";
  marginLeft="200px";
  constructor() { }

  ngOnInit(): void {
  }

}

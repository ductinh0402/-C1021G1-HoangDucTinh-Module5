import { Component, OnInit } from '@angular/core';
import {DictionaryServiceService} from "../service/dictionary-service.service";
import {IWord} from "../model/iword";

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
   iWord:IWord[]=[];
  constructor(private DictionaryPage: DictionaryServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
this.iWord=this.DictionaryPage.getAll();
  }
}

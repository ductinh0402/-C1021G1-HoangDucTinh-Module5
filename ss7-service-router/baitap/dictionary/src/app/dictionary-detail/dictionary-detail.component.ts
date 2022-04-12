import { Component, OnInit } from '@angular/core';


import {ActivatedRoute, ParamMap} from "@angular/router";
import {DictionaryServiceService} from "../service/dictionary-service.service";
import {IWord} from "../model/iword";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {


  word = '';
  // mean = '';


  mean :  IWord;

  constructor(private route: ActivatedRoute,private dictionaryServiceService:DictionaryServiceService) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.word = params.get('word');

      this.mean = this.dictionaryServiceService.search(this.word);
    });
  }

}

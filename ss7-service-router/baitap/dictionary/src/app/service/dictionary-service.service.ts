import {Injectable} from '@angular/core';
import {IWord} from "../model/iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  iWord: IWord[] = [
    {
      word: "helo",
      mean: "xin chào"
    },
    {
      word: "able ",
      mean: "có năng lực"
    },
    {
      word: "abandon  ",
      mean: "từ bỏ"
    },
    {
      word: "about",
      mean: "khoảng"
    },
    {
      word: "above   ",
      mean: "ở trên"
    },
    {
      word: "act   ",
      mean: "hành động"
    },
    {
      word: "add   ",
      mean: "cộng"
    },
    {
      word: "afraid",
      mean: "sợ"
    },
    {
      word: "after",
      mean: "sau"
    },
    {
      word: "again",
      mean: "lại"
    }
  ];

  constructor() {
  }
  getAll() {
    return this.iWord;
  }
  save(iWord){
    this.iWord.push(iWord);
  }


}

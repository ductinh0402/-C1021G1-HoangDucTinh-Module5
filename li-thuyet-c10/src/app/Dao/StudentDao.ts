import {IStudent} from "../../models/IStudent";

export class StudentDao {
 public  static students:IStudent[]=[{
   id:1,
   name:"Hoàng đức tịnh",
   age:15,
   mark: 5,
   address:"Quảng Trị"
 },
   {
     id:2,
     name:"Hoàng văn nam",
     age:15,
     mark: 9,
     address:"Quảng bình"
   },
   {
     id:3,
     name:"nguyễn văn bắc",
     age:15,
     mark: 6,
     address:"Đà nẵng"
   },
   {
     id:4,
     name:"trần hoài nam",
     age:12,
     mark: 7,
     address:"Huế"
   },
   {
     id:5,
     name:"Lê duy linh",
     age:20,
     mark: 5,
     address:"Bình Định"
   }
 ]
}

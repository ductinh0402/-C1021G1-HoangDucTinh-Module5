import {ICustomerType} from "./ICustomerType";

export interface ICustomer {
  id:number;
  name:string;
  birthday: string;
  gender:boolean;
  IdCard:string;
  phone:string;
  email:string;
  customerType:ICustomerType;
  address:string;
}

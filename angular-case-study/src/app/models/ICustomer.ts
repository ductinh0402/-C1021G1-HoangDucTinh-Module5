import {ICustomerType} from "./ICustomerType";

export interface ICustomer {
  id:number;
  name:string;
  code:string
  birthday: string;
  gender:string;
  card:string;
  phone:string;
  email:string;
  address:string;
  customerType:ICustomerType;
}

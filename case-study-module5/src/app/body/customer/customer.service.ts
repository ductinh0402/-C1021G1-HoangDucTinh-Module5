import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICustomer} from "../../models/ICustomer";
import {ICustomerType} from "../../models/ICustomerType";



@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private readonly API_CUSTOMER_URL= "http://localhost:3000/customer";
  private readonly API_CUSTOMER_TYPE_URL= "http://localhost:3000/customerType";
  message: string;
  constructor(private http: HttpClient) { }

   getCustomerType(){
    return this.http.get<ICustomerType[]>(this.API_CUSTOMER_TYPE_URL);
   }
  getCustomerList(){
    return this.http.get<ICustomer[]>(this.API_CUSTOMER_URL);
  }
  save(data){
    return this.http.post(this.API_CUSTOMER_URL,data)
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICustomerType} from "../../models/ICustomerType";
import {ICustomer} from "../../models/ICustomer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private readonly API_CUSTOMER_URL= "http://localhost:3000/customer";
  private readonly API_CUSTOMER_TYPE_URL= "http://localhost:3000/customerType";
  message: string | undefined;
  constructor(private http: HttpClient) { }

  getCustomerType(){
    return this.http.get<ICustomerType[]>(this.API_CUSTOMER_TYPE_URL);
  }
  getCustomerList(){
    return this.http.get<ICustomer[]>(this.API_CUSTOMER_URL);
  }
  save(data: any){
    return this.http.post(this.API_CUSTOMER_URL,data)
  }
}

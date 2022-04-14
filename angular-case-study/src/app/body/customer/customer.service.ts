import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICustomerType} from '../../models/ICustomerType';
import {ICustomer} from '../../models/ICustomer';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private readonly API_CUSTOMER_URL = 'http://localhost:3000/customer';
  private readonly API_CUSTOMER_TYPE_URL = 'http://localhost:3000/customerType';

  constructor(private http: HttpClient) {
  }

  getCustomerType() {
    return this.http.get<ICustomerType[]>(this.API_CUSTOMER_TYPE_URL);
  }

  getCustomerList() {
    return this.http.get<ICustomer[]>(this.API_CUSTOMER_URL);
  }

  save(data: ICustomer): Observable<ICustomer> {
    return this.http.post<ICustomer>(this.API_CUSTOMER_URL, data);
  }

  getCustomerById(id) {
    return this.http.get(`${this.API_CUSTOMER_URL}/${id}`);
  }

  Search(name: string, address: string, gender: string, customerType: string): Observable<any> {
    console.log(name + ' xyz ' + address + ' xyz ' + gender + ' xyz ' + customerType + ' xyz ');
    return this.http.get<ICustomer[]>(this.API_CUSTOMER_URL + '?name_like=' + name + '&address_like=' + address + '&gender_like=' + gender + '&customerType.name_like=' + customerType);
  }

  deleteById(id) {
    return this.http.delete(this.API_CUSTOMER_URL + '/' + id);
  }

  updateCustomer(id, data) {
    return this.http.put(`${this.API_CUSTOMER_URL}/${id}`, data);
  }
}

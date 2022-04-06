import {ICustomer} from "../models/ICustomer";
import {CustomerType} from "./CustomerType";
import {ICustomerType} from "../models/ICustomerType";


export class Customer implements ICustomer{
  private static _customers: ICustomer[] = [
    {
      id: 1,
      name: "nguyễn văn bình",
      birthday: "12/12/2022",
      gender: true,
      IdCard: 9876543215,
      phone: "093654987",
      email: "binh@gmail.com",
      customerType: CustomerType.customerType[1],
      address: "da nang"
    },
    {
      id: 2,
      name: "nguyễn văn f",
      birthday: "12/12/2022",
      gender: true,
      IdCard: 9876543215,
      phone: "093654987",
      email: "binh@gmail.com",
      customerType: CustomerType.customerType[2],
      address: "da nang"
    },
    {
      id: 3,
      name: "nguyễn văn e",
      birthday: "12/12/2022",
      gender: true,
      IdCard: 9876543215,
      phone: "093654987",
      email: "binh@gmail.com",
      customerType: CustomerType.customerType[3],
      address: "da nang"
    },
    {
      id: 4,
      name: "nguyễn văn d",
      birthday: "12/12/2022",
      gender: true,
      IdCard: 9876543215,
      phone: "093654987",
      email: "binh@gmail.com",
      customerType: CustomerType.customerType[4],
      address: "da nang"
    },
    {
      id: 5,
      name: "nguyễn văn c",
      birthday: "12/12/2022",
      gender: false,
      IdCard: 9876543215,
      phone: "093654987",
      email: "binh@gmail.com",
      customerType: CustomerType.customerType[0],
      address: "da nang"
    },
    {
      id: 6,
      name: "nguyễn văn b",
      birthday: "12/12/2022",
      gender: false,
      IdCard: 9876543215,
      phone: "093654987",
      email: "binh@gmail.com",
      customerType: CustomerType.customerType[0],
      address: "da nang"
    },
    {
      id: 7,
      name: "nguyễn văn a",
      birthday: "12/12/2022",
      gender: false,
      IdCard: 9876543215,
      phone: "093654987",
      email: "binh@gmail.com",
      customerType: CustomerType.customerType[0],
      address: "quảng trị"
    },
    {
      id: 8,
      name: "nguyễn văn a",
      birthday: "12/12/2022",
      gender: false,
      IdCard: 9876543215,
      phone: "093654987",
      email: "binh@gmail.com",
      customerType: CustomerType.customerType[0],
      address: "huế"
    }
  ]
  private _IdCard: number;
  private _address: string;
  private _birthday: string;
  private _customerType: ICustomerType;
  private _email: string;
  private _gender: boolean;
  private _id: number;
  private _name: string;
  private _phone: string;

  constructor(IdCard: number, address: string, birthday: string, customerType: ICustomerType, email: string, gender: boolean, id: number, name: string, phone: string) {
    this._IdCard = IdCard;
    this._address = address;
    this._birthday = birthday;
    this._customerType = customerType;
    this._email = email;
    this._gender = gender;
    this._id = id;
    this._name = name;
    this._phone = phone;
  }

  static get customers(): ICustomer[] {
    return this._customers;
  }

  static set customers(value: ICustomer[]) {
    this._customers = value;
  }

  get IdCard(): number {
    return this._IdCard;
  }

  set IdCard(value: number) {
    this._IdCard = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get birthday(): string {
    return this._birthday;
  }

  set birthday(value: string) {
    this._birthday = value;
  }

  get customerType(): ICustomerType {
    return this._customerType;
  }

  set customerType(value: ICustomerType) {
    this._customerType = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get gender(): boolean {
    return this._gender;
  }

  set gender(value: boolean) {
    this._gender = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }
}

import {ICustomerType} from "../models/ICustomerType";

export class CustomerType implements ICustomerType{
  private static _customerType: ICustomerType[] = [
    {
      id: 1,
      name: "Diamond"
    },
    {
      id: 2,
      name: "Platinium"
    },
    {
      id: 3,
      name: "Gold"
    },
    {
      id: 4,
      name: "Silver"
    },
    {
      id: 5,
      name: "Member"
    }
  ]
  private _id: number;
  private _name: string;

  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
  }

  static get customerType(): ICustomerType[] {
    return this._customerType;
  }

  static set customerType(value: ICustomerType[]) {
    this._customerType = value;
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
}

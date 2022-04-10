import {IDivision} from "./IDivision";
import {IEducationDegree} from "./IEducationDegree";
import {IPosition} from "./IPosition";

export interface IEmployee {
  id: number;
  code: string;
  name: string;
  birthday: string;
  salary: number
  IdCard: string;
  phone: string;
  email: string;
  address: string;
  division: IDivision;
  educationDegree: IEducationDegree;
  position: IPosition;
}

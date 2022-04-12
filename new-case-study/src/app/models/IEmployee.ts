import {IDivision} from "./IDivision";
import {IEducationDegree} from "./IEducationDegree";
import {IPosition} from "./IPosition";

export interface IEmployee {
  id: number;
  code: string;
  name: string;
  birthday: string;
  salary: number
  card: string;
  phone: string;
  email: string;
  address: string;
  division: IDivision;
  education: IEducationDegree;
  position: IPosition;




}

import {Position} from "./Position";
import {Division} from "./Division";
import {EducationDegree} from "./EducationDegree";
import {IEmployee} from "../models/IEmployee";





export class Employee {

   static employee: IEmployee[] = [
    {
      id: 1,
      code: "KH-2630",
      name: "nguyễn văn bình",
      birthday: "12/12/2022",
      IdCard: "9876543215",
      phone: "093654987",
      email: "binh@gmail.com",
      address: "da nang",
      salary: 5000000,
      educationDegree:EducationDegree.educationDegree[1],
      position: Position._position[1],
      division:Division.division[1]
    },
    {
      id: 2,
      code: "KH-2631",
      name: "nguyễn văn a",
      birthday: "12/12/2022",
      IdCard: "9876543215",
      phone: "093654987",
      email: "binh@gmail.com",
      address: "da nang",
      salary: 5000000,
      educationDegree:EducationDegree.educationDegree[2],
      position: Position._position[2],
      division:Division.division[2]
    },
    {
      id: 3,
      code: "KH-2639",
      name: "nguyễn sinh",
      birthday: "12/12/2022",
      IdCard: "9876543215",
      phone: "093654987",
      email: "binh@gmail.com",
      address: "da nang",
      salary: 5000000,
      educationDegree:EducationDegree.educationDegree[2],
      position: Position._position[2],
      division:Division.division[2]
    },
    {
      id: 4,
      code: "KH-2635",
      name: "trần nam",
      birthday: "12/12/2022",
      IdCard: "9876543215",
      phone: "093654987",
      email: "binh@gmail.com",
      address: "da nang",
      salary: 5000000,
      educationDegree:EducationDegree.educationDegree[2],
      position: Position._position[2],
      division:Division.division[2]
    }
  ]
}

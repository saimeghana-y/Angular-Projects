import { Component } from '@angular/core';
import { Employee } from './EmployeeApp/employee';
import { Deparment } from "./EmployeeApp/department";
import { Skill } from "./EmployeeApp/skill";

let kv1: Deparment = { id:1, name:"Payroll" }; 
let skls: Skill[] = [
    { id: 1, name: 'HTML' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'JavaScript' },
  ];
const person: Employee = {
    id: 'EM003',
    name: 'John',
    salary: 10000,
    permanent: true,
    department: kv1,
    skills: skls,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movie:string='Lord of the Rings';
  title = '4_angular';
  emp: Employee = person;
    dept: Deparment = kv1;
    skl: Skill[] = skls;
    todayDate : Date = new Date();
}

import { Employee } from './employee';
import { Component } from '@angular/core';


const person: Employee = {
    id: 'EM003',
    name: 'Sam',
    salary: 9000,
    permanent: true,
    joiningDate :  new Date("2021/05' 20"),
};

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
  })
  
  
export class EmployeeComponent {
    emp: Employee = person;
    title:string = "Employee Information";
    display() {
        console.log('id:',person.id);
        console.log('name:', person.name); 
        console.log('salary:', person.salary); 
        console.log('permanent:', person.permanent); 
    }
}

import { Employee } from '../employee';
import { Component } from '@angular/core';


const person: Employee = {
    id: 1003,
    name: 'John',
    salary: 10000,
    permanent: true,
};

@Component({
    selector: 'app-root',
    templateUrl: '../app.component.html',
    styleUrls: ['./employee.component.css']
  })

export class EmployeeComponent {
    emp: Employee = person;
    title: string = "Employee Information";
    

    displayId() {
        return this.emp.id;
    }
    displayName() {
        return this.emp.name;
    }
    displaySalary() {
        return this.emp.salary;
    }
    displayPermanentOrNot() {
        return this.emp.permanent;
    }
}

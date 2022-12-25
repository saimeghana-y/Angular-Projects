import { Employee } from './employee';
import { Deparment } from "./department";
import { Skill } from "./skill";

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

class EmployeeTest {
    emp: Employee;
    dept: Deparment;
    skl: Skill[];

    constructor(e: Employee, d: Deparment, s: Skill[]) {
        this.emp = e;
        this.dept = d;
        this.skl = s;
    }

    display() {
        console.log('id:',person.id);
        console.log('name:', person.name); 
        console.log('salary:', person.salary); 
        console.log('permanent:', person.permanent); 
        console.log('department id:', person.department.id); 
        console.log('department name:', person.department.name); 
        for (let entry of person.skills) {
            console.log('skill[',entry.id-1,']:',entry.id,',',entry.name); // 1, "string", false
        }

    }
}

// create Employee class object
let e1 = new EmployeeTest(person,kv1,skls);
e1.display();
"use strict";
exports.__esModule = true;
var kv1 = { id: 1, name: "Payroll" };
var skls = [
    { id: 1, name: 'HTML' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'JavaScript' },
];
var person = {
    id: 'EM003',
    name: 'John',
    salary: 10000,
    permanent: true,
    department: kv1,
    skills: skls
};
var EmployeeTest = /** @class */ (function () {
    function EmployeeTest(e, d, s) {
        this.emp = e;
        this.dept = d;
        this.skl = s;
    }
    EmployeeTest.prototype.display = function () {
        console.log('id:', person.id);
        console.log('name:', person.name);
        console.log('salary:', person.salary);
        console.log('permanent:', person.permanent);
        console.log('department id:', person.department.id);
        console.log('department name:', person.department.name);
        for (var _i = 0, _a = person.skills; _i < _a.length; _i++) {
            var entry = _a[_i];
            console.log('skill[', entry.id - 1, ']:', entry.id, ',', entry.name); // 1, "string", false
        }
    };
    return EmployeeTest;
}());
// create Employee class object
var e1 = new EmployeeTest(person, kv1, skls);
e1.display();

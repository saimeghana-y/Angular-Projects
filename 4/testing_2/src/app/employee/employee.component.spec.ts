import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Employee Component', () => {
    expect(component).toBeTruthy();
  });
  it(`should have a title 'Employee Information'`, () => {
    expect(component.title).toEqual('Employee Information');
  });
  it('should have an employee name sam', () => {
    expect(component.emp.name).toBe('Sam');
  });
  it(`should have an employee salary '90000'`, () => {
    expect(component.emp.salary).toBe(9000);
  });
  it(`should have an employee joining date '2015/05/20'`, () => {
    expect(component.emp.joiningDate).toEqual(new Date('Thu May 20 2021 00:00:00 GMT+0530 (India Standard Time)'));
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    expect(compiled.querySelector('.title')?.tagName ).toBe('H1');
    expect(compiled.querySelector('.title')?.textContent ).toBe('Employee Information');
  });

  it('should render employee name in a h2 tag', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    expect(compiled.querySelector('#name')?.tagName ).toBe('H2');
    expect(compiled.querySelector('#name')?.textContent ).toBe('Name : Sam');
  });
  it('should render employee salary in a h2 tag', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    expect(compiled.querySelector('#salary')?.tagName ).toBe('H2');
    expect(compiled.querySelector('#salary')?.textContent ).toBe('Salary : ₹9,000.00');
  });
  it('should render employee joining date in a h2 tag', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    expect(compiled.querySelector('#joiningDate')?.tagName ).toBe('H2');
    expect(compiled.querySelector('#joiningDate')?.textContent ).toBe('Date of Joining : Thursday, May 20, 2021');
  });
});

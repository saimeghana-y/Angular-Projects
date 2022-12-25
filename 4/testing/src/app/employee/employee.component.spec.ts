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
    const fixture = TestBed.createComponent(EmployeeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Employee Information'`, () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Employee Information');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    expect(compiled.querySelector('.title')?.tagName ).toBe('H1');
  });

  it('DisplayId method should be defined', () => {

    let emp : EmployeeComponent = new EmployeeComponent;
    expect(emp.displayId()).toBeDefined();
  });

  it('displayName method should be defined', () => {
  
      let emp : EmployeeComponent = new EmployeeComponent;
      expect(emp.displayName()).toBeDefined();
    });

    it('displayPermanentOrNot method should be defined', () => {
    
        let emp : EmployeeComponent = new EmployeeComponent;
        expect(emp.displayPermanentOrNot()).toBeDefined();
      });


      it('displaySalary method should be defined', () => {
      
          let emp : EmployeeComponent = new EmployeeComponent;
          expect(emp.displaySalary()).toBeDefined();
        });

    it('DisplayId method should return a 4 digit id >=1000', () => {
  
      let emp : EmployeeComponent = new EmployeeComponent;
      expect(emp.displayId()).toBeGreaterThanOrEqual(1000);
    });

    it('displayName method should not return blank', () => {
  
      let emp : EmployeeComponent = new EmployeeComponent;
      expect(emp.displayName()).toBe('John');
    });
    it('Salary should be greater than 3000', () => {
      
      let emp : EmployeeComponent = new EmployeeComponent;
      expect(emp.displaySalary()).toBeGreaterThanOrEqual(3000);
    });
    it('should render id in a h2 tag', () => {
      const fixture = TestBed.createComponent(EmployeeComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.id')?.tagName ).toBe('H2');
    });
    it('should render name in a h2 tag', () => {
      const fixture = TestBed.createComponent(EmployeeComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.name')?.tagName ).toBe('H2');
    });
    it('should render salary in a h2 tag', () => {
      const fixture = TestBed.createComponent(EmployeeComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.salary')?.tagName ).toBe('H2');
    });
    it('should render permanent or not in a h2 tag', () => {
      const fixture = TestBed.createComponent(EmployeeComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.perm')?.tagName ).toBe('H2');
    });
});

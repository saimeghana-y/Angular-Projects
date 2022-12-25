import { Component } from '@angular/core';

interface Courses{
  title : string,
  level : string,
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent {
  public courses : Courses[] = []
    constructor() {
      this.courses.push({ title: 'Introduction to .NET Core', level: "Intermediate" });
      this.courses.push({ title: 'Understanding APIs', level: "Intermediate" });
      this.courses.push({ title: 'Introduction to HTML5', level: "Beginner" });
      this.courses.push({ title: 'Basics of TypeScript', level: "Beginner" });
      this.courses.push({ title: 'Introduction to Docker Containers', level: "Advanced" });
      this.courses.push({ title: 'Algorithms and Data Structures', level: "Advanced" });
  }
}
import { Deparment } from "./department";
import { Skill } from "./skill";

export interface Employee {
    id: string;
    name: string;
    salary: number;
    permanent: true;
    department: Deparment;
    skills: Skill[];
  }
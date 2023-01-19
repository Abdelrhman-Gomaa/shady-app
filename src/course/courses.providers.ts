import { Course } from "./entities/course.entity";

export const CoursesProviders = [
  {
    provide: 'COURSES_REPOSITORY',
    useValue: Course,
  }
];


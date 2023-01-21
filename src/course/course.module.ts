import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { DatabaseModule } from 'src/database/database.module';
import { CoursesProviders } from './courses.providers';
import { SubjectService } from 'src/subject/subject.service';
import { SubjectModule } from 'src/subject/subject.module';
import { SubjectsProviders } from 'src/subject/subject.providers';

@Module({
  imports:[
    DatabaseModule,
    SubjectModule
  ],
  controllers: [CourseController],
  providers: [
    CourseService,
    ...CoursesProviders,
    SubjectService,
    ...SubjectsProviders
  ]
})
export class CourseModule {}

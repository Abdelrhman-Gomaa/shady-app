import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { DatabaseModule } from 'src/database/database.module';
import { CoursesProviders } from './courses.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [CourseController],
  providers: [
    CourseService,
    ...CoursesProviders
  ]
})
export class CourseModule {}

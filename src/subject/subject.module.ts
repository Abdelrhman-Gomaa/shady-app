import { Module } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectController } from './subject.controller';
import { DatabaseModule } from 'src/database/database.module';
import { SubjectsProviders } from './subject.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [SubjectController],
  providers: [
    SubjectService,
    ...SubjectsProviders,
  ]
})
export class SubjectModule {}

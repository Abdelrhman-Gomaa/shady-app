import { Subject } from "./entities/subject.entity";

export const SubjectsProviders = [
    {
        provide: 'SUBJECTS_REPOSITORY',
        useValue: Subject
    }
]
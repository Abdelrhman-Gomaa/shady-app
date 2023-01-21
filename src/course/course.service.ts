import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Subject } from '../subject/entities/subject.entity';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {
  constructor(
    @Inject('COURSES_REPOSITORY')
    private readonly courseRepository: typeof Course,
    @Inject('SUBJECTS_REPOSITORY')
    private readonly subjectRepository: typeof Subject,
  ){}

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    const subject = await this.preloadSubjectByName(createCourseDto.subject);
    createCourseDto.subject_Id = subject.id;

    let result =  await this.courseRepository.create<Course>(
      {
        name: createCourseDto.name,
        creator: createCourseDto.creator,
        description: createCourseDto.description,
        mediaUrl: createCourseDto.mediaUrl,
        resources: createCourseDto.resources,
        price: createCourseDto.price,
        subject_Id: subject.id,
        subject
      }
    );
    return result;
  }

  async findAll(): Promise<Course[]> {
    return await this.courseRepository.findAll({include: {all: true}});
  }

  async findOne(id: number): Promise<Course> {
    let result = await this.courseRepository.findByPk(id,{include: {all: true}});;
    if(!result){
      throw new NotFoundException(`Not Found ID #${id}`);
    }
    return result;
  }

  async update(id: number, updateCourseDto: UpdateCourseDto): Promise<any> {
    let result = await this.courseRepository.update(
      {...updateCourseDto},
      {where: {id: id} }
    );
    if(result = [0]){
      throw new NotFoundException(`Not Found ID #${id}`);
    }
    return result;
  }

  async remove(id: number) {
    let result = await this.courseRepository.destroy(
      {where: {id: id} }
    );
    if(!result){
      throw new NotFoundException(`Not Found ID #${id}`);
    }
    return result;
  } 
  
  private async preloadSubjectByName(name: string): Promise<Subject> {
    const existingSubject = await this.subjectRepository.findOne({where :{name: name}});
    if(existingSubject){
        return existingSubject
    }
    return this.subjectRepository.create({ name });
  }

}

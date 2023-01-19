import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {
  constructor(
    @Inject('COURSES_REPOSITORY')
    private readonly courseRepository: typeof Course,
  ){}

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    return await this.courseRepository.create<Course>({...createCourseDto});
  }

  async findAll(): Promise<Course[]> {
    return await this.courseRepository.findAll();
  }

  async findOne(id: number): Promise<Course> {
    let result = await this.courseRepository.findByPk(id);;
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
  
}

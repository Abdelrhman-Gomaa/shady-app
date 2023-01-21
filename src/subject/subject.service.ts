import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Subject } from './entities/subject.entity';

@Injectable()
export class SubjectService {
  constructor(
    @Inject('SUBJECTS_REPOSITORY')
    private readonly subjectRepository: typeof Subject
  ){}

  async create(createSubjectDto: CreateSubjectDto) : Promise<Subject>{
    return await this.subjectRepository.create({...createSubjectDto});
  }

  async findAll() : Promise<Subject[]> {
    let result = await this.subjectRepository.findAll({include: {all: true}});
    if(!result){
      throw new NotFoundException(`Not Found ID`);
    }
    return result;
  }

  async findOne(id: number) : Promise<Subject> {
    let result = await this.subjectRepository.findByPk(id,{include: {all: true}});
    if(!result){
      throw new NotFoundException(`Not Found ID #${id}`);
    }
    return result;
  }

  async update(id: number, updateSubjectDto: UpdateSubjectDto) : Promise<any> {
    let result = await this.subjectRepository.update(
      {...updateSubjectDto},
      {where: {id: id} }
    );
    if(result = [0]){
      throw new NotFoundException(`Not Found ID #${id}`);
    }
    return result;
  }

  async remove(id: number) : Promise<any> {
    let result = await this.subjectRepository.destroy(
      {where: {id: id} }
    );
    if(!result){
      throw new NotFoundException(`Not Found ID #${id}`);
    }
    return result;
  }
}

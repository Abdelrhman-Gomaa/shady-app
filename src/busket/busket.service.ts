import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBusketDto } from './dto/create-busket.dto';
import { UpdateBusketDto } from './dto/update-busket.dto';
import { Busket } from './entities/busket.entity';

@Injectable()
export class BusketService {
  constructor(
    @Inject('BUSKETS_REPOSITORY')
    private readonly busketRepository: typeof Busket
  ){}

  async create(createBusketDto: CreateBusketDto): Promise<Busket> {
    return await this.busketRepository.create({...createBusketDto});
  }

  async findAll(): Promise<Busket[]> {
    let result = await this.busketRepository.findAll();
    if(!result) throw new NotFoundException(`Not Found`);
    return result 
  }

  async findOne(id: number): Promise<Busket> {
    let result = await this.busketRepository.findByPk(id);
    if(!result) throw new NotFoundException(`Not Found`);
    return result
  }

  async update(id: number, updateBusketDto: UpdateBusketDto): Promise<any> {
    let result = await this.busketRepository.update(
      {...updateBusketDto},
      {where: {id: id} }
    );
    if(result = [0]){
      throw new NotFoundException(`Not Found ID #${id}`);
    }
    return result;
  }

  async remove(id: number): Promise<any>{
    let result = await this.busketRepository.destroy(
      {where: {id: id} }
    );
    if(!result){
      throw new NotFoundException(`Not Found ID #${id}`);
    }
    return result;
  } 
}

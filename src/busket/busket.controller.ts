import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { BusketService } from './busket.service';
import { CreateBusketDto } from './dto/create-busket.dto';
import { UpdateBusketDto } from './dto/update-busket.dto';

@ApiTags('Busket')
@UseGuards(AuthGuard())
@Controller('busket')
export class BusketController {
  constructor(private readonly busketService: BusketService) {}

  @Post()
  create(@Body() createBusketDto: CreateBusketDto) {
    return this.busketService.create(createBusketDto);
  }

  @Get()
  findAll() {
    return this.busketService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.busketService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBusketDto: UpdateBusketDto) {
    return this.busketService.update(+id, updateBusketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.busketService.remove(+id);
  }
}

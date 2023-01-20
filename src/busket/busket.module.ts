import { Module } from '@nestjs/common';
import { BusketService } from './busket.service';
import { BusketController } from './busket.controller';
import { BusketsProviders } from './busket.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [BusketController],
  providers: [
    BusketService,
    ...BusketsProviders
  ]
})
export class BusketModule {}

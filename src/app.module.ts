import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { BusketModule } from './busket/busket.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    DatabaseModule, 
    UserModule, 
    CourseModule, 
    BusketModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

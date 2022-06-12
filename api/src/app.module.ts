import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlatformsController } from './platforms/platforms.controller';

@Module({
  imports: [],
  controllers: [AppController, PlatformsController],
  providers: [AppService],
})
export class AppModule {}

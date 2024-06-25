import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KittensServiceService } from './kittens-service/kittens-service.service';
import { RabbitsController } from './rabbits/rabbits.controller';
import { FishModule } from './fish/fish.module';

@Module({
  imports: [FishModule],
  controllers: [AppController, RabbitsController],
  providers: [AppService, KittensServiceService],
})
export class AppModule {}

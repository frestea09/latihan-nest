import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';

@Module({
  imports: [AppModule, PersonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

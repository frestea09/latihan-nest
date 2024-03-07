import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonController } from './person/person.controller';
import { PersonModule } from './person/person.module';

@Module({
  imports: [AppModule, PersonModule],
})
export class AppModule {}

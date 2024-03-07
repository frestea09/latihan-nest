import { Module } from '@nestjs/common';
import { PersonService, jwtConstants } from './person.service';
import { PersonController } from './person.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule {}

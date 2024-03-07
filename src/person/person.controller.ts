import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonDto } from './dto/person.dto/person.dto';
import { PersonGuard } from './person.guard';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}
  @Get()
  sayHello() {
    return {
      data: 'hello world',
    };
  }
  @Get('service')
  sayHelloWorldService() {
    return {
      data: this.personService.getData(),
    };
  }
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.personService.signInTwo(signInDto.username, signInDto.password);
  }
  //   @Get(':id')
  //   sayHelloID(@Param('id') id: number) {
  //     return this.personService.getData().filter((item) => item.id == id);
  //   }
  @UseGuards(PersonGuard)
  @Post()
  postBody(@Body() personDTO: PersonDto) {
    return {
      name: personDTO.name,
      age: personDTO.age,
    };
  }
  @Post('employee/:id')
  getIdBody(@Param('id') id: string) {
    return {
      id: id,
      data: 'succes',
    };
  }
  @Post('manager/:id')
  postBodyManager(@Param('id') id: string, @Body() personDTO: PersonDto) {
    return {
      id: id,
      name: personDTO.name,
      age: personDTO.age,
    };
  }
}

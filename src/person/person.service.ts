import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
export type User = any;
export const jwtConstants = {
  secret:
    'DO NOT USE THIS VALUE. INSTEAD, CREATE A COMPLEX SECRET AND KEEP IT SAFE OUTSIDE OF THE SOURCE CODE.',
};
@Injectable()
export class PersonService {
  constructor(private jwtService: JwtService) {}
  private data = [
    {
      id: 1,
      name: 'ilman',
      password: '12345',
    },
  ];
  getHelloWorld() {
    return 'data';
  }
  getData() {
    return this.data;
  }
  async findOne(username: string): Promise<User | undefined> {
    return this.data.find((user) => user.name === username);
  }
  async signInTwo(username: string, pass: string) {
    const user = await this.data.find((item) => item.name == username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.name };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.data.find((item) => item.name == username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.name };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

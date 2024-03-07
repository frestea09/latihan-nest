import { PersonDto } from './person.dto';

describe('PersonDto', () => {
  it('should be defined', () => {
    expect(new PersonDto()).toBeDefined();
  });
});

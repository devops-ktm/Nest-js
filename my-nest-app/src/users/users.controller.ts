import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return [
      { id: 1, name: 'Alice', email: 'alice@example.com' },
      { id: 2, name: 'Bob', email: 'bob@example.com' },
      { id: 3, name: 'hari', email: 'hari@example.com' },
      { id: 4, name: 'ram', email: 'ram@example.com' },
      { id: 5, name: 'karl', email: 'karl@example.com' },
      { id: 6, name: 'amit', email: 'amit@example.com' },
    ];
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { RepositoryUser } from './user.repository';

@Controller('/usuarios')
export class UserController {
  private repositoryUser = new RepositoryUser();
  @Post()
  async createUser(@Body() dataUser) {
    this.repositoryUser.salvar(dataUser);
    return dataUser;
  }

  @Get()
  async listUsers() {
    return this.repositoryUser.list();
  }
}

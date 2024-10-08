import { Body, Controller, Get, Post } from "@nestjs/common";
import { RepositoryUser } from "./user.repository";
import { CreateUserDTO } from "./dto/create.user";

@Controller("/usuarios")
export class UserController {
  constructor(private repositoryUser: RepositoryUser) {}
  @Post()
  async createUser(@Body() dataUser: CreateUserDTO) {
    this.repositoryUser.salvar(dataUser);
    return dataUser;
  }

  @Get()
  async listUsers() {
    return this.repositoryUser.list();
  }
}

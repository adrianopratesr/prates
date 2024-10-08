import { Injectable } from "@nestjs/common";

@Injectable()
export class RepositoryUser {
  private users = [];

  salvar(user) {
    this.users.push(user);
  }

  async list() {
    return this.users;
  }
}

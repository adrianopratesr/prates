import { Module } from "@nestjs/common";
import { UserController } from "./controller.user";
import { RepositoryUser } from "./user.repository";

@Module({
  controllers: [UserController],
  providers: [RepositoryUser],
})
export class UserModule {}

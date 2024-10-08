import { RepositoryUser } from "./user.repository";
import { CreateUserDTO } from "./dto/create.user";
export declare class UserController {
    private repositoryUser;
    constructor(repositoryUser: RepositoryUser);
    createUser(dataUser: CreateUserDTO): Promise<CreateUserDTO>;
    listUsers(): Promise<any[]>;
}

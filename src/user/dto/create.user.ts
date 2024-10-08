import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDTO {
  @IsNotEmpty({ message: "O nome não pode ser vazio" })
  name: string;

  @IsEmail(undefined, { message: "O email informado é invalido" })
  email: string;

  @MinLength(6, { message: "A senha deve ter no minimo 6 caracteres" })
  password: string;
}

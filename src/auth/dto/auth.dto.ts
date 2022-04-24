// export interface AuthDto {
//   email: string;
//   password: string;
// }

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// The pipes like "IsEmail, IsNotEmpty, IsString" will not work unless we allow the pipes
// to run globally
export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
//By using the "Injectable", we make sure that it uses the Dependency Injection
@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'I have signed up.' };
  }
  signin() {
    return { msg: 'I have signed in.' };
  }
}

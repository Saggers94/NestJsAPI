import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
//By using the "Injectable", we make sure that it uses the Dependency Injection
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup() {
    return { msg: 'I have signed up.' };
  }
  signin() {
    return { msg: 'I have signed in.' };
  }
}

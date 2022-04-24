import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

//Providers provides a business logic. It can also be called as "Service"
@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}

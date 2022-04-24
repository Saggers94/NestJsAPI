import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

// Under the hood ConfigModule use "dotenv" library

// This "@Module" is a decorator function. A decorator function is a function that adds
// meta data to class
@Module({
  imports: [
    // TO make sure the Config Module is available globally we use "isGlobal: true"
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UserModule,
    BookmarkModule,
    PrismaModule,
  ],
})
export class AppModule {}

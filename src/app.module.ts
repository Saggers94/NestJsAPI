import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';

// This "@Module" is a decorator function. A decorator function is a function that adds
// meta data to class
@Module({
  imports: [AuthModule, UserModule, BookmarkModule, PrismaModule],
})
export class AppModule {}

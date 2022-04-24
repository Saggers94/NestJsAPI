import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// Through the "@Global", this module will be available globally
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}

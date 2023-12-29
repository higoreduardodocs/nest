import { Global, Module } from '@nestjs/common';

import { PrismaService } from './prisma.service';

@Global()
@Module({
  exports: [PrismaModule],
  providers: [PrismaService],
})
export class PrismaModule {}

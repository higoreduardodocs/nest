import { Module } from '@nestjs/common';

import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  providers: [TodoService, PrismaService],
  controllers: [TodoController],
})
export class TodoModule {}

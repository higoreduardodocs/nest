import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private readonly prismaService: PrismaService) {}

  createTodo(body: Prisma.TodoCreateInput) {
    return this.prismaService.todo.create({
      data: body,
    });
  }

  getAllTodos() {
    return this.prismaService.todo.findMany({});
  }

  updateTodo(id: number, body: Prisma.TodoUpdateInput) {
    return this.prismaService.todo.update({ where: { id }, data: body });
  }

  getTodo(id: number) {
    return this.prismaService.todo.findUnique({ where: { id } });
  }

  deleteTodo(id: number) {
    return this.prismaService.todo.delete({ where: { id } });
  }
}

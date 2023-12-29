import { Prisma } from '@prisma/client';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';

import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  createTodo(@Body() body: Prisma.TodoCreateInput) {
    return this.todoService.createTodo(body);
  }

  @Get()
  getAllTodos() {
    return this.todoService.getAllTodos();
  }

  @Put(':id')
  updateTodo(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Prisma.TodoUpdateInput,
  ) {
    return this.todoService.updateTodo(id, body);
  }

  @Get(':id')
  getTodo(@Param('id', ParseIntPipe) id: number) {
    return this.todoService.getTodo(id);
  }

  @Delete(':id')
  deleteTodo(@Param('id', ParseIntPipe) id: number) {
    return this.todoService.deleteTodo(id);
  }
}

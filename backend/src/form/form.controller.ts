import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { FormService } from './form.service';
import { Form } from './schemas/form.schema';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('forms')
@UseGuards(JwtAuthGuard)
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  async create(@Body() formData: Partial<Form>, @Request() req) {
    return this.formService.create(formData, req.user.userId);
  }

  @Get()
  async findAll(@Request() req) {
    return this.formService.findAll(req.user.userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Request() req) {
    return this.formService.findOne(id, req.user.userId);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() formData: Partial<Form>, @Request() req) {
    return this.formService.update(id, formData, req.user.userId);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Request() req) {
    return this.formService.remove(id, req.user.userId);
  }
}

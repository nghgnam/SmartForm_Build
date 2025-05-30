import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Form } from './schemas/form.schema';

@Injectable()
export class FormService {
  constructor(
    @InjectModel(Form.name) private formModel: Model<Form>
  ) {}

  async create(formData: Partial<Form>, userId: string): Promise<Form> {
    const createdForm = new this.formModel({
      ...formData,
      creator: userId
    });
    return createdForm.save();
  }

  async findAll(userId: string): Promise<Form[]> {
    return this.formModel.find({ creator: userId }).exec();
  }

  async findOne(id: string, userId: string): Promise<Form> {
    const form = await this.formModel.findOne({ _id: id, creator: userId }).exec();
    if (!form) {
      throw new NotFoundException('Form not found');
    }
    return form;
  }

  async update(id: string, formData: Partial<Form>, userId: string): Promise<Form> {
    const form = await this.formModel.findOneAndUpdate(
      { _id: id, creator: userId },
      { $set: formData },
      { new: true }
    ).exec();

    if (!form) {
      throw new NotFoundException('Form not found');
    }
    return form;
  }

  async remove(id: string, userId: string): Promise<void> {
    const result = await this.formModel.deleteOne({ _id: id, creator: userId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Form not found');
    }
  }
}

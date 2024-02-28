/* eslint-disable @typescript-eslint/no-explicit-any */
import { InjectModel } from '@nestjs/mongoose';
import {
  AnyKeys,
  Document,
  FilterQuery,
  Model,
  ProjectionType,
  QueryOptions,
  UpdateQuery,
} from 'mongoose';
import { DEFAULT_FIRST_PAGE, DEFAULT_LIMIT_PAGE } from 'src/constants';
import { IPaginationResponse } from 'src/interfaces';

export class BaseRepository<T extends Document> {
  constructor(@InjectModel('') private readonly model: Model<T>) {}

  async findOne(
    filter: FilterQuery<T>,
    projection: ProjectionType<T>,
    options?: QueryOptions<T>,
  ): Promise<T> {
    return await this.model.findOne(filter, projection, options);
  }

  async findById(
    id: string,
    projection?: ProjectionType<T>,
    options?: QueryOptions<T>,
  ): Promise<T> {
    return this.model.findById(id, projection, options);
  }

  async find(
    filter: FilterQuery<T>,
    projection: ProjectionType<T>,
    options?: QueryOptions<T>,
  ): Promise<T[]> {
    return this.model.find(filter, projection, options);
  }

  async paginate(
    filter?: FilterQuery<T>,
    page = DEFAULT_FIRST_PAGE,
    limit = DEFAULT_LIMIT_PAGE,
    projection?: ProjectionType<T>,
    opts?: QueryOptions<T>,
  ): Promise<IPaginationResponse<T>> {
    const offset = (page - 1) * limit;
    const count = await this.model.countDocuments();
    const data = await this.model
      .find(filter, projection, opts)
      .skip(offset)
      .limit(limit);
    return { items: data, total: count, page, limit } as IPaginationResponse<T>;
  }

  async create(model: AnyKeys<T>): Promise<T> {
    const data = new this.model(model);
    return data.save();
  }

  async multipleCreate(model: AnyKeys<T[]>): Promise<any> {
    return this.model.bulkSave(model);
  }

  async update(
    filter: FilterQuery<T>,
    model: UpdateQuery<T>,
    options?: QueryOptions,
  ): Promise<T> {
    return this.model.findOneAndUpdate(filter, model, options);
  }

  async delete(filter: FilterQuery<T>, options?: QueryOptions): Promise<T> {
    return this.model.findOneAndDelete(filter, options);
  }
}

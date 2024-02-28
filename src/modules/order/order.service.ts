import { Injectable } from '@nestjs/common';
import { AnyKeys } from 'mongoose';
import { ORDER_MESSAGE } from 'src/constants/messages';
import { Order } from 'src/database/schemas';
import { ErrorHelper } from 'src/helpers';
import { IPaginationResponse } from 'src/interfaces';

import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService {
  constructor(private orderRepository: OrderRepository) {}

  getOrders(
    page?: number,
    limit?: number,
  ): Promise<IPaginationResponse<Order>> {
    const getAllCondition = {};
    return this.orderRepository.paginate(getAllCondition, page, limit);
  }
  async createOrder(data: AnyKeys<Order>): Promise<Order> {
    return await this.orderRepository.create(data);
  }
  async findById(id: string): Promise<Order> {
    return this.orderRepository.findById(id);
  }
  async updateOrder(id: string, params: AnyKeys<Order>): Promise<Order> {
    const user = await this.findById(id);
    if (!user) {
      ErrorHelper.BadRequestException(ORDER_MESSAGE.ORDER_NOT_FOUND);
    }
    const resultUpdate = await this.orderRepository.update(
      { id: user.id },
      { ...params },
      { new: true },
    );
    return resultUpdate;
  }
}

import { Module } from '@nestjs/common';

import { BotService } from './bot.service';
import { BotEvent } from './bot.event';

@Module({
  imports: [],
  providers: [BotService, BotEvent],
})
export class BotModule {}

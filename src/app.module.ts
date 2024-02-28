import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';

import { AppController } from './app.controller';
import { TELEGRAM_BOT_TOKEN } from './constants';
import { MongodbModule } from './database';
import { BotModule, OrderModule } from './modules';

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: TELEGRAM_BOT_TOKEN,
    }),
    MongodbModule,
    BotModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

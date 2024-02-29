/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@nestjs/common';
import { Command, Hears, Help, On, Start, Update } from 'nestjs-telegraf';
import { Context } from 'telegraf';
import { BotCommand } from 'telegraf/typings/core/types/typegram';

@Update()
@Injectable()
export class BotEvent {
  @Start()
  async startCommand(ctx: Context): Promise<void> {
    await ctx.reply('Welcome');
    console.log(await ctx.sendMessage('ok'));
  }

  @Help()
  async helpCommand(ctx: Context): Promise<void> {
    await ctx.replyWithPhoto(
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    );
  }

  @On('sticker')
  async onSticker(ctx): Promise<void> {
    // await ctx.reply('Làm việc đi mấy con sói già');
    const from = ctx.update.message.from;
    await ctx.reply(
      `Cháu ${from.first_name} ${from.last_name} spam sticker ít thôi!`,
    );
    // await ctx.reply('👍');
    console.log('🚀 ~ BotEvent ~ onSticker ~ ctx:', ctx.update);
  }

  @Hears('hi')
  async hearsHi(ctx: Context): Promise<void> {
    await ctx.sendSticker(
      'CAACAgUAAxkBAANcZbtsQf1s1Wv42eZYngABzrhCICEtAAJdAQAC1qeZECviXzBn1WdlNAQ',
    );
  }

  @Command('kick')
  async commandKick(ctx: any): Promise<void> {
    if (ctx.update.message.from.username === 'johanpham')
      // await ctx.reply(
      //   `Thằng ${ctx.payload} đang trên hàng chờ kick rồi đại ka, nó còn 23h để suy nghĩ lại!`,
      // );
      await ctx.reply(
        `Oke đại ka, em sẽ kick thằng ${ctx.payload} sau 24h nếu nó không chơi!`,
      );
    else await ctx.reply(`Bạn không phải đại ka của mình!`);
  }
}

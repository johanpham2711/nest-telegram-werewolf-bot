import * as dotenv from 'dotenv';
dotenv.config();

// const NEED_TO_CONFIGURED = 'NEED TO CONFIGURED';

// Environment
export const ENVIRONMENT: string = process.env.ENVIRONMENT || 'local';

// Application
export const SERVER_PORT: number = +process.env.SERVER_PORT || 8080;
export const URL_PREFIX: string = process.env.URL_PREFIX || '/api';
export const BASE_URL = process.env.BASE_URL || 'http://localhost:8080';

// Telegram
export const TELEGRAM_BOT_TOKEN =
  process.env.TELEGRAM_BOT_TOKEN || 'TELEGRAM_BOT_TOKEN';

// Mongo database
export const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/telegram-werewolf-bot';

// Cloudinary
export const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME || 'CLOUDINARY_NAME';
export const CLOUDINARY_API_KEY =
  process.env.CLOUDINARY_API_KEY || 'CLOUDINARY_API_KEY';
export const CLOUDINARY_API_SECRET =
  process.env.CLOUDINARY_API_SECRET || 'CLOUDINARY_API_SECRET';

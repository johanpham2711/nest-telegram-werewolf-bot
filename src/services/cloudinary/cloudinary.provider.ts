/* eslint-disable @typescript-eslint/naming-convention */
import { ConfigOptions, v2 as cloudinary } from 'cloudinary';
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_NAME,
} from 'src/constants';

export const CloudinaryProvider = {
  provide: 'CLOUDINARY',
  useFactory: (): ConfigOptions => {
    return cloudinary.config({
      cloud_name: CLOUDINARY_NAME,
      api_key: CLOUDINARY_API_KEY,
      api_secret: CLOUDINARY_API_SECRET,
    });
  },
};

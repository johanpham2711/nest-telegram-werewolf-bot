import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { TCloudinaryResponse } from 'src/types';
import * as streamifier from 'streamifier';

@Injectable()
export class CloudinaryService {
  uploadFile(file: Express.Multer.File): Promise<TCloudinaryResponse> {
    return new Promise<TCloudinaryResponse>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        },
      );

      streamifier.createReadStream(file.buffer).pipe(uploadStream);
    });
  }
}

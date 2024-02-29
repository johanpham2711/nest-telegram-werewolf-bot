import {
  Controller,
  HttpCode,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { CloudinaryService } from './cloudinary.service';
import { UploadDto } from './dtos';

@ApiTags('cloudinary')
@Controller('cloudinary')
export class CloudinaryController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @ApiOperation({ summary: 'API upload media to Cloudinary' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Upload media to Cloudinary',
    type: UploadDto,
  })
//   @ApiBearerAuth()
  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  @HttpCode(201)
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    return this.cloudinaryService.uploadFile(file);
  }
}

import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UploadDto {
  @ApiProperty({
    type: String,
    format: 'binary',
    description: 'file',
    required: true,
  })
  @IsOptional()
  file?: string;

  // @ApiProperty({
  //   description: 'File name',
  //   type: String,
  //   required: false,
  // })
  // @IsOptional()
  // fileName?: string;
}

import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const configSwagger = (app: NestExpressApplication): void => {
  const config = new DocumentBuilder()
    .setTitle('NestJS Telegram Werewolf bot API')
    .setDescription(
      'This is the NestJS Telegram Werewolf bot API documentation!',
    )
    .setVersion('1.0')
    .addTag('cloudinary')
    .addBearerAuth()
    .addSecurity('basic', {
      type: 'http',
      scheme: 'basic',
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });
};

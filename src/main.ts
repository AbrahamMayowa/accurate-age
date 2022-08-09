import { NestFactory } from '@nestjs/core';
import { AgeModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';




async function bootstrap() {
  
  const app = await NestFactory.create(AgeModule);
  app.enableCors();
  app.setGlobalPrefix('/');

  const config = new DocumentBuilder()
    .setTitle('Accurate Age')
    .setDescription('Calculate the accurate age')
    .setVersion('1.0')
    .addTag('age')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api', app, document);
  
  await app.listen(process.env.PORT);
}
bootstrap();

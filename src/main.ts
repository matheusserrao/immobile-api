import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression';
import { ValidationPipe } from '@nestjs/common';
import { Swagger } from './swagger/swagger';

async function bootstrap() {

  const app = await NestFactory.create(AppModule, { logger: ['log', 'error', 'warn', 'debug', 'verbose']});

  app.use(compression());

  app.useGlobalPipes(new ValidationPipe( { transform: true } ));

  app.enableCors();

  app.setGlobalPrefix(process.env.ROUTE_PREFIX);

  Swagger.setUp(app);

  await app.listenAsync(process.env.PORT);
}

bootstrap();

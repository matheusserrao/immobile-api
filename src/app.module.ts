import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { ValueModule } from './value/value.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ValueModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule implements NestModule {
  
  configure(consumer: MiddlewareConsumer) {

    consumer
        .apply(LoggerMiddleware)
        .forRoutes({path: '*', method: RequestMethod.ALL});
  }

}

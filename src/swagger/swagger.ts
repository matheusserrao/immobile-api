import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export class Swagger {

    static setUp(app: INestApplication){
        
        const options = new DocumentBuilder()
                                .setTitle('Immobile API')
                                .setDescription(`End point: ${process.env.END_POINT}:${process.env.PORT}`)
                                .setVersion('1.0')
                                .build();
                            
        const document = SwaggerModule.createDocument(app, options);
        SwaggerModule.setup(`${process.env.ROUTE_PREFIX}/api`, app, document);
    }
}


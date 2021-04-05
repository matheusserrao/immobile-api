import { NestMiddleware, Injectable, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
   
    private readonly logger = new Logger(LoggerMiddleware.name);

    use(req: Request, res: Response, next: Function) {
     
        const { ip, method, originalUrl: url } = req;
        
        const userAgent = req.get('user-agent') || '';
        const referer = req.get('referer') || '';

        res.on('close', () => {
            const { statusCode, statusMessage } = res;
            const contentLength = res.get('content-length');
            this.logger.log(`"${ip}" "${method} ${url}" ${statusCode} ${statusMessage} ${contentLength} "${referer}" "${userAgent}" "${ip}"`);
        });

        next();
    }

}
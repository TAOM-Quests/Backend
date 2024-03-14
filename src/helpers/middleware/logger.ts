import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response } from 'express';


@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly logger: Logger) {}

  use(req: Request, res: Response, next: () => void) {
    const startAt = Date.now();
    const { method } = req;

    this.logger.log(`[${method}] ${req.originalUrl} - Started`);

    res.on('finish', () => {
      const duration = Date.now() - startAt;
      const { statusCode } = res;

      this.logger.log(`[${method}] ${req.originalUrl} - Finished - ${statusCode} - ${duration}ms`);
    });

    next();
  }
}
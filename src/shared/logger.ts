import { LoggerService } from '@nestjs/common';

export class MyLogger implements LoggerService {
  log(_message: string) {}
  error(_message: string, _trace: string) {}
  warn(_message: string) {}
  debug(_message: string) {}
  verbose(_message: string) {}
}
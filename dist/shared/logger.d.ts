import { LoggerService } from '@nestjs/common';
export declare class MyLogger implements LoggerService {
    log(_message: string): void;
    error(_message: string, _trace: string): void;
    warn(_message: string): void;
    debug(_message: string): void;
    verbose(_message: string): void;
}

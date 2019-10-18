import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class AdminGuard implements CanActivate {
    canActivate(context: ExecutionContext): Promise<boolean>;
    validateToken(auth: string): Promise<any>;
}

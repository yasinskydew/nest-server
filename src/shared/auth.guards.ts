import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    if(!request.headers.authorization){

      return false;
    }
    request.user = await this.validateToken(request.headers.authorization);
    return true;
  }

  async validateToken(auth: string){
    try {
      const decoded = jwt.verify(auth, process.env.JWT_SECRET);
      return decoded;
    } catch (err) {
      throw new HttpException(onmessage, HttpStatus.FORBIDDEN)
    }
  }
}
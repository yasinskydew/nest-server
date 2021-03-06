import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AdminGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    if(!request.headers.authorization){
      return false;
    }
    const user = await this.validateToken(request.headers.authorization);
    if(user.role === 'admin'){
        return true;
    }
    return false;
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
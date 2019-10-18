"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
let AdminGuard = class AdminGuard {
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        if (!request.headers.authorization) {
            return false;
        }
        const user = await this.validateToken(request.headers.authorization);
        if (user.role === 'admin') {
            return true;
        }
        return false;
    }
    async validateToken(auth) {
        try {
            const decoded = jwt.verify(auth, process.env.JWT_SECRET);
            return decoded;
        }
        catch (err) {
            throw new common_1.HttpException(onmessage, common_1.HttpStatus.FORBIDDEN);
        }
    }
};
AdminGuard = __decorate([
    common_1.Injectable()
], AdminGuard);
exports.AdminGuard = AdminGuard;
//# sourceMappingURL=roles.guargs.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const logger_1 = require("./shared/logger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: new logger_1.MyLogger()
    });
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Nest-server')
        .setDescription('The API description')
        .addBearerAuth()
        .setVersion('1.0')
        .addTag('users')
        .addTag('leagues')
        .addTag('stages')
        .addTag('races')
        .build();
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
    }));
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map
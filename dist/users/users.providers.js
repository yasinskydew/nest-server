"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_schema_1 = require("./users.schema");
exports.usersProviders = [
    {
        provide: 'USER_MODEL',
        useFactory: (connection) => connection.model('User', users_schema_1.UserSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=users.providers.js.map
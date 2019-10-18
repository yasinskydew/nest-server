"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const races_schema_1 = require("./races.schema");
exports.racesProviders = [
    {
        provide: 'RACE_MODEL',
        useFactory: (connection) => connection.model('Race', races_schema_1.RaceSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=races.providers.js.map
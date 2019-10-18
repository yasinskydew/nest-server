"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leagues_schema_1 = require("./leagues.schema");
exports.leaguesProviders = [
    {
        provide: 'LEAGUE_MODEL',
        useFactory: (connection) => connection.model('League', leagues_schema_1.LeagueSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=leagues.providers.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stages_schema_1 = require("./stages.schema");
exports.stagesProviders = [
    {
        provide: 'STAGE_MODEL',
        useFactory: (connection) => connection.model('Stage', stages_schema_1.StageSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=stages.providers.js.map
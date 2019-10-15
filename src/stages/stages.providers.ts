import { Connection } from 'mongoose';
import { StageSchema } from './stages.schema';

export const stagesProviders = [
    {
        provide: 'STAGE_MODEL',
        useFactory: (connection: Connection) => connection.model('Stage', StageSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
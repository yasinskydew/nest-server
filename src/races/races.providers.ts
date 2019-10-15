import { Connection } from 'mongoose';
import { RaceSchema } from './races.schema';

export const racesProviders = [
    {
        provide: 'RACE_MODEL',
        useFactory: (connection: Connection) => connection.model('Race', RaceSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
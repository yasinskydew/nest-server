import { Connection } from 'mongoose';
import { LeagueSchema } from './leagues.schema';

export const leaguesProviders = [
    {
        provide: 'LEAGUE_MODEL',
        useFactory: (connection: Connection) => connection.model('League', LeagueSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
import { NavigationStackProp } from 'react-navigation-stack';

/*---------------------THEME---------------------*/

export type Theme = {
    theme: {
        background: {
            primary: string,
            secondary: string,
            default: string
        },
        color: {
            primary: string,
            secondary: string,
            default: string
        }
    }
};

/*--------------------LOCALES--------------------*/

export type Locales = Array<{
    languageTag: string;
}>;

/*------------------NAVIGATION-------------------*/

export type Navigation = {
    navigation: NavigationStackProp<{
        userId: string
    }>;
};

/*---------------------REDUX---------------------*/

export interface InitialState {
    readonly games: string[],
    readonly userStats: UserStat[]
}

export interface Games {
    games: string[]
};

export interface UserStats {
    userStats: UserStat[]
};
  
export interface UserStat {
    inserted_at: string
    numbers: number[],
    type: string
};

export interface UserStatsReqParams {
    limit?: number,
    sort?: string
}

/*------------------COMPONENTS-------------------*/

export interface GeneratorProps {
    getGameList: () => void
    getUserStats: (
        user: string,
        game: string,
        params: UserStatsReqParams
    ) => void,
    games: string[],
    userStats: UserStat[],
    loadingGames: boolean,
    loadingStats: boolean
};
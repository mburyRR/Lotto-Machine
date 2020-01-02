import { Reducer } from 'redux';
import { InitialState, UserStatsReqParams } from '../common/types';

export const GET_GAME_LIST = 'LottoMachine/GAME_LIST';
export const GET_GAME_LIST_SUCCESS = 'LottoMachine/GAME_LIST_SUCCESS';
export const GET_GAME_LIST_FAIL = 'LottoMachine/GAME_LIST_FAIL';
export const GET_USER_STATS = 'LottoMachine/USER_STATS';
export const GET_USER_STATS_SUCCESS = 'LottoMachine/USER_STATS_SUCCESS';
export const GET_USER_STATS_FAIL = 'LottoMachine/USER_STATS_FAIL';

const initialState: InitialState = {
  games: [],
  userStats: []
};

export const rootReducer: Reducer = (
  state: InitialState = initialState,
  action: any
) => {
  switch (action.type) {
    case GET_GAME_LIST:
      return {
        ...state,
        loadingGames: true
      };
    case GET_GAME_LIST_SUCCESS:
      return {
        ...state,
        loadingGames: false,
        games: action.payload.data.games
      };
    case GET_GAME_LIST_FAIL:
      return {
        ...state,
        loadingGames: false,
        errorUser: 'Error getting list of available games'
      };

    case GET_USER_STATS:
      return {
        ...state,
        loadingStats: true
      };
    case GET_USER_STATS_SUCCESS:
      return {
        ...state,
        loadingStats: false,
        userStats: action.payload.data.data
      };
    case GET_USER_STATS_FAIL:
      return {
        ...state,
        loadingStats: false,
        errorUser: 'Error getting user profile info'
      };
    default:
      return state;
  }
}

export const getGameList = () => {
  return {
    type: GET_GAME_LIST,
    payload: {
      request: {
        url: `/api/games`
      }
    }
  };
}

export const getUserStats = (
  user: string,
  game: string = '',
  params: UserStatsReqParams = {}
) => {
  /**
   * Convert object with params to the query strng
   */
  const query: string = new URLSearchParams(params as Record<string, string>).toString();

  return {
    type: GET_USER_STATS,
    payload: {
      request: {
        url: `/api/users/${user}/numbers/${game}?${query}`
      }
    }
  };
}
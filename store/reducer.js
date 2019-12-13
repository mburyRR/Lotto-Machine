export const GET_GAME_LIST = 'LottoMachine/GAME_LIST';
export const GET_GAME_LIST_SUCCESS = 'LottoMachine/GAME_LIST_SUCCESS';
export const GET_GAME_LIST_FAIL = 'LottoMachine/GAME_LIST_FAIL';
export const GET_USER_PROFILE = 'LottoMachine/USER_PROFILE';
export const GET_USER_PROFILE_SUCCESS = 'LottoMachine/USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_FAIL = 'LottoMachine/USER_PROFILE_FAIL';

const initialState = { games: null, userProfile: null };

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAME_LIST:
      return { ...state, loadingGames: true };
    case GET_GAME_LIST_SUCCESS:
      return { ...state, loadingGames: false, games: action.payload.data.games };
    case GET_GAME_LIST_FAIL:
      return {
        ...state,
        loadingGames: false,
        errorUser: 'Error getting list of available games'
      };

    case GET_USER_PROFILE:
      return { ...state, loadingProfile: true };
    case GET_USER_PROFILE_SUCCESS:
      return { ...state, loadingProfile: false, userProfile: action.payload.data.data };
    case GET_USER_PROFILE_FAIL:
      return {
        ...state,
        loadingProfile: false,
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

export const getUserProfile = (user, game = '', params = {}) => {
  /**
   * Convert object with params to the query strng
   */
  const query = new URLSearchParams(params).toString();

  return {
    type: GET_USER_PROFILE,
    payload: {
      request: {
        url: `/api/users/${user}/numbers/${game}?${query}`
      }
    }
  };
}
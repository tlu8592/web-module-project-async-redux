export const FETCH_PLAYER_LOADING = 'FETCH_PLAYER_LOADING';
export const FETCH_PLAYER_SUCCESS = 'FETCH_PLAYER_SUCCESS';
export const FETCH_PLAYER_FAIL = 'FETCH_PLAYER_FAIL';

export const fetchPlayerLoading = () => {
    return ({ type: FETCH_PLAYER_LOADING });
}

export const fetchPlayerSuccess = (playerData) => {
    return ({ type: FETCH_PLAYER_SUCCESS, payload: playerData });
}

export const fetchPlayerFail = (error) => {
    return ({ type: FETCH_PLAYER_FAIL, payload: error });
}

export const getPlayerData = () => {
    return null;
}
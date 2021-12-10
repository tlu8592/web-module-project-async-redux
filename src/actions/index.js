import axios from 'axios';

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
    return dispatch => {
        dispatch ( { type: FETCH_PLAYER_LOADING })
        axios
            .get('https://www.balldontlie.io/api/v1/players')
                .then(res => {
                    console.log("response", res);
                    dispatch({ type: FETCH_PLAYER_SUCCESS, payload: res.data.data  });
                })
                .catch(err => {
                    console.log("errors", err);
                    dispatch({ type: FETCH_PLAYER_FAIL, payload: err.error });
                });
    }
}
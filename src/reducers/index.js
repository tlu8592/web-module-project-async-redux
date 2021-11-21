import {
    FETCH_PLAYER_LOADING,
    FETCH_PLAYER_SUCCESS,
    FETCH_PLAYER_FAIL
} from '../actions/index';

const initialState = {
    getPlayers: [],
    isFetching: false,
    error: ''
}

//   axios
  //     .get('https://www.balldontlie.io/api/v1/players')
  //     .then(res => console.log("response", res))
  //     .catch(err => console.log("errors", err));

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(FETCH_PLAYER_LOADING):
            return({
                ...state,
                isFetching: true
            });
        case(FETCH_PLAYER_SUCCESS):
            return({
                ...state,
                getPlayers: action.payload,
                isFetching: false
            });
        case(FETCH_PLAYER_FAIL):
            return({
                ...state,
                isFetching: false,
                error: action.payload
            })
        default:
            return state;
    }
}

export default reducer;
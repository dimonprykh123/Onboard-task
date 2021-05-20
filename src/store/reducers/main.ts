import {MainAction, MainActionTypes, MainState} from "../../types/main";

const initialState: MainState = {
    data: [],
    error: null,
    loading: false
}

const mainReducer = (state = initialState, action: MainAction): MainState => {
    switch (action.type) {
        case MainActionTypes.FETCH_NOTIFICATIONS:
            return {...state, loading: true, error: null, data: []}
        case MainActionTypes.FETCH_NOTIFICATIONS_SUCCESS:
            return {...state, loading: false, data: action.payload}
        case MainActionTypes.FETCH_NOTIFICATIONS_ERROR:
            return {...state, loading: false, error: action.payload, data: []}
        default:
            return state
    }
}

export default mainReducer
import * as types from "./actionType";

const initState = {
    data: [],
    error: "",
    isLoading: false,
}

const appReducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.FETCH_DATA_REQ:
            return {
                ...state,
                error: "",
                isLoading: true
            }
        case types.FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: payload,
                error: "",
                isLoading: false
            }
        case types.FETCH_DATA_FALIURE:
            return {
                ...state,
                error: "",
                isLoading: false,
            };
        default:
            return state;
    }
}

export default appReducer;
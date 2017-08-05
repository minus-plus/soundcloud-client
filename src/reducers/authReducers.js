
export default function authReducers(state = {}, action) {
    switch(action.type) {
        case "SET_USER":
        return {
            ...state,
            user: {...action.payload}
        };
        break;
    default:
        return state;
    }
}
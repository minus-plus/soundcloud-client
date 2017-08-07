const initialState = {
    tracks:[]
}
const tracksReducers = function(state = initialState, action) {
    switch(action.type) {
        case "GET_TRACKS":
            return {
                ...state,
                tracks: [...action.payload]
            };
            break;

        default:
            return state;
    }
};



export default tracksReducers;
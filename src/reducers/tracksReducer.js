const initialState = {
    tracks:[],
    activeTrack:null
}
const tracksReducers = function(state = initialState, action) {
    switch(action.type) {
        case "GET_TRACKS":
            return {
                ...state,
                tracks: [...action.payload]
            }
            break;

        case "PLAY_TRACKS":
            console.log('......... activeTrack:', action.payload.origin.title);
            return {
                ...state,
                activeTrack: action.payload
            }
        default:
            return state;
    }
};



export default tracksReducers;
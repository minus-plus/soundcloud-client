const initialState = {
    tracksList:[]
};
/*
* tracksReducers deal with the actions that fetch tracks from server and set tracks to the tracks list, which
* will be rendered to the map page.  pass tracks to TrackList component
*
* **/
const tracksReducers = function(state = initialState, action) {
    switch(action.type) {
        case "SET_TRACKS_LIST":
            return {
                ...state,
                tracksList: [...action.payload]
            };
            break;

        default:
            return state;
    }
};

export default tracksReducers;
const initialState = {
    tracksList: [],
    comments: [],
    next_href: ""
};

/*
* tracksReducers deal with the actions that fetch tracks from server and set tracks to the tracks list, which
* will be rendered to the map page.  pass tracks to TrackList component
*
* **/
const tracksReducers = function (state = initialState, action) {
    switch (action.type) {
        case "SET_TOP_TRACK":
            const {topTrack} = action.payload;
            return {
                ...state,
                tracksList: topTrack
            };
        case "SET_RELATED_TRACKS":``
            const {relatedTracks} = action.payload;
            return {
                ...state,
                tracksList: relatedTracks
            };
        case "SET_COMMENTS":
            const {comments} = action.payload;
            return {
                ...state,
                comments: comments
            };
            break;
        case 'SET_TRACKS_LIST':
            const {tracksList} = action.payload;
            const {next_href} = action.payload;

            return {
                ...state,
                tracksList: tracksList,
                next_href: next_href

            };
            break;
        case 'LOAD_MORE_TRACKS':
            const newTrackList = [...state.tracksList, ...action.payload.tracksList];
            return {
                ...state,
                tracksList: newTrackList,
                next_href: action.payload.next_href
            };
            return;
        default:
            return state;
    }
};

export default tracksReducers;
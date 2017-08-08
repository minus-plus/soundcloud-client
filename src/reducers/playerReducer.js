
const initialState = {
    playList: [],
    isPlaying: false,
    playingTrack: {},
    playingTrackIndex: -1,
    duration: 0,
    currentTime: 0
};


export default function playerReducer(state = initialState, action) {

    switch (action.type) {
        case "GET_PLAYLIST":
            return {
                ...state,
                playList: action.payload
            }
        case "TOGGLE_IS_PLAYING":
            return {
                ...state,
                isPlaying: !state.isPlaying
            };
        case "PLAY_TRACKS":
            return {
                ...state,
                playingTrackIndex: action.payload.track_index,
                playingTrackId: action.payload.track_id,
                isPlaying: true
            };
        case "SET_DURATION":
            return {
                ...state,
                duration: action.payload
            };
        case "SET_CURRENT_TIME":
            return {
                ...state,
                currentTime: action.payload
            }
        default:
            return state;
    }
}
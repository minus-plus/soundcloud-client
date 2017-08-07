
const initialState = {
    isPlaying: false,
    playingTrack: {},
    duration: 0,
    currentTime: 0
};


export default function playerReducer(state = initialState, action) {

    switch (action.type) {
        case "TOGGLE_IS_PLAYING":
            return {
                ...state,
                isPlaying: !state.isPlaying
            };
        case "PLAY_TRACKS":
            return {
                ...state,
                playingTrack: action.payload
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
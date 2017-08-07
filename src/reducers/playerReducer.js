
const initialState = {
    isPlaying: false,
    playingTrack: {}
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
            }
        default:
            return state;
    }
}
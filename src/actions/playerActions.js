
export function toggleIsPlaying () {
    return {
        type: "TOGGLE_IS_PLAYING"
    }
}

export function playTracks(track) {
    return {
        type: 'PLAY_TRACKS',
        payload: track
    }
}
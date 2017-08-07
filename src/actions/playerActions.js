
export function toggleIsPlaying () {
    return {
        type: 'TOGGLE_IS_PLAYING'
    }
}

export function playTracks(track) {
    return {
        type: 'PLAY_TRACKS',
        payload: track
    }
}

export function setDuration(duration) {
    return {
        type: 'SET_DURATION',
        payload: duration
    }
}

export function setCurrentTime(currentTime) {
    return {
        type: 'SET_CURRENT_TIME',
        payload: currentTime
    }
}
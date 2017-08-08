
export function toggleIsPlaying () {
    return {
        type: 'TOGGLE_IS_PLAYING'
    }
}

export function getPlayList() {
    return function(dispatch, getState) {
        const tracks = getState().tracks;
        dispatch({
            type: 'GET_PLAYLIST',
            payload: tracks
        })
    }
}

export function playTracks(track_index) {
    return {
        type: 'PLAY_TRACKS',
        payload: track_index
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


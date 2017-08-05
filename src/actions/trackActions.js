const tracks = [
    {
        origin: {
            title: "title 1"
        }
    },
    {
        origin: {
            title: "title 2"
        }
    }
];

export function getTracks() {
    return {
        type: "GET_TRACKS",
        payload: tracks
    }
}

export function playTracks(track) {
    return {
        type: "PLAY_TRACKS",
        payload: track
    }
}
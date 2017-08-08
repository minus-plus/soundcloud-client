const tracks = [

];

export function getTracks() {
    return {
        type: "GET_TRACKS",
        payload: tracks
    }
}

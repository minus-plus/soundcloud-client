const tracks = [
    {
        title: "title 1"
    },
    {
        title: "title 2"

    }
];

export function getTracks() {
    return {
        type: "GET_TRACKS",
        payload: tracks
    }
}

import {CLIENT_ID} from "../constants/auth";
import axios from 'axios';

export function getTracksInfo(id) {
    return function (dispatch) {
        const trackId = id;
        const URL = `http://api.soundcloud.com/tracks/${trackId}?client_id=a281614d7f34dc30b665dfcaa3ed7505`;

        axios.get(URL)
            .then(function (response) {
                let myTrack = response.data;
                dispatch({
                    type: "SET_TOP_TRACK",
                    payload: {
                        topTrack: myTrack
                    }
                });
                axios.get(`http://api.soundcloud.com/users/${myTrack.user.id}/tracks?client_id=${CLIENT_ID}`)
                    .then(function (response) {
                        let tracks = response.data;
                        dispatch({
                            type: "SET_RELATED_TRACKS",
                            payload: {
                                relatedTracks: tracks
                            }
                        })
                    })
            })
            .catch(function (err) {
                console.log('error when fetching tracks ..', err);
            });
        axios.get(`http://api.soundcloud.com/tracks/${trackId}/comments?client_id=a281614d7f34dc30b665dfcaa3ed7505`)
            .then(function (response) {
                dispatch({
                    type: "SET_COMMENTS",
                    payload: {
                        comments: response.data
                    }
                })
            })
            .catch(function (err) {
                console.log('error when fetching comments ...', err);
            })
    }
}
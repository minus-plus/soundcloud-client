import axios from 'axios';
import {CLIENT_ID} from "../constants/auth";

const URL = 'http://api.soundcloud.com'

export function getCurrentTrack() {
    return function (dispatch) {

        axios.get(`${URL}/tracks/${trackId}?client_id=${CLIENT_ID}`)
            .then(res => {
                dispatch ({
                    type: "FETCH_CURRENT_TRACK",
                    payload: {
                        myTrack: res.data
                    }
                })
            })
    }
}

export function getTrackDetails() {
    const user = myT
    return function (dispatch) {
        axios.get(`${URL}/users/`)
    }
}
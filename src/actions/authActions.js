import SC from 'soundcloud';

import axios from 'axios';

export function auth() {
    return function(dispatch) {
        SC.connect().then((session) => {
            getUser(session, dispatch);
            getTracks(session, dispatch);
        });
    }
}


function getUser(session, dispatch) {
    axios({
        method: 'get',
        url: `//api.soundcloud.com/me?oauth_token=${session.oauth_token}`
    }).then((response) => {
        dispatch({
            type: "SET_USER",
            payload: response.data
        })
    })
}

function getTracks(session, dispatch) {
    axios({
        method: 'get',
        url: `//api.soundcloud.com/me/activities?limit=20&offset=0&oauth_token=${session.oauth_token}`
    })
        .then((response) => {
        const tracks = response.data.collection.map((track => track.origin || track));
        dispatch({
            type: 'GET_TRACKS',
            payload: tracks
        })
    })
}
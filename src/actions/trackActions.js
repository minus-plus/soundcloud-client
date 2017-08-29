import axios from 'axios';

export function getTracks() {
    return function(dispatch){
        const URL = "https://api.soundcloud.com/tracks?client_id=a281614d7f34dc30b665dfcaa3ed7505&linked_partitioning=1&limit=50&q=";
    
        axios.get(`${URL}house`)
            .then(function (response) {
                
                let tracks = response.data.collection;
                dispatch({
                    type:"SET_TRACKS_LIST",
                    payload: {
                        tracksList: response.data.collection,
                        next_href: response.data.next_href
                    }
                })
            })
            .catch(function(err) {
                console.log('error when fetching initial tracks ..');
            })
    }
}

export function loadMoreTracks(next_href, toggleLoading) {
    return function(dispatch) {
        axios.get(next_href)
            .then(function (response) {
                let moreTracks = response.data.collection;
                dispatch({
                    type:"LOAD_MORE_TRACKS",
                    payload: {
                        tracksList: response.data.collection,
                        next_href: response.data.next_href
                    }
                });
                toggleLoading();
            })
            .catch(function(err) {
                console.log('error when loading more tracks ..');
            })
    }
}
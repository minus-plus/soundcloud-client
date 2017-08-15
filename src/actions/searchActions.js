import SC from 'soundcloud';

const page_size  = 100;

export function searchTracks(route) {
    return function(dispatch){
        SC.get(`/tracks?q=${route.query.q}`, {limit:page_size, linked_partitioning: 1})
            .then(function (res) {
                dispatch({
                    type:"GET_TRACKS",
                    payload:res.collection
                })
            })
    }
}

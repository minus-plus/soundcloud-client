export function getTracks() {
    return function(dispatch){
        SC.get(`/tracks?q=house`, {limit:50, linked_partitioning: 1})
            .then(function (response) {
                let tracks = response.collection;
                dispatch({
                    type:"SET_TRACKS_LIST",
                    payload:response.collection
                })
            })
    }
}

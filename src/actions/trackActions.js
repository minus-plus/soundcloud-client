export function getTracks() {
    return function(dispatch){
        SC.get(`/tracks?q=house`, {limit:10, linked_partitioning: 1})
            .then(function (response) {
                dispatch({
                    type:"SET_TRACKS_LIST",
                    payload:response.collection
                })
            })
    }
}

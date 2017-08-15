const tracks = [

];


export function getTracks() {
    return function(dispatch){
        SC.get(`/tracks?q=house`, {limit:10, linked_partitioning: 1})
            .then(function (res) {
                dispatch({
                    type:"GET_TRACKS",
                    payload:res.collection
                })
            })
    }
}

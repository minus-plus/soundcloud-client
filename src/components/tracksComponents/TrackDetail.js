import React from 'react';
import TrackDisplay from '../../containers/TrackDisplayContainer';

function TrackDetail(props) {
    return (
        <div>
            <TrackDisplay id={props.params.id}/>
        </div>
    )
}

export default TrackDetail;
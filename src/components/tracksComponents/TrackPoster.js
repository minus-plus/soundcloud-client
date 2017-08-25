import React from 'react';

export default function TrackPoster(props) {
    const track = props.track;
    return (
        <div className="song--image"
             style={{backgroundImage: `url(${track.artwork_url})`}}>
            <div className="toggle-play-button-detail">
                <i className="fa fa-play"></i>
            </div>
        </div>
    )
}
import React from 'react';

export default function TrackPoster(props) {
    const track = props.track;
    return (
        <div className="song-list-item-image"
             style={{backgroundImage: `url(${track.artwork_url})`}}>
            <div className="toggle-play-button-detail">
                <div className="toggle-play-button-detail-icon">
                    <i className="fa fa-play"/>
                </div>
            </div>
        </div>
    )
}
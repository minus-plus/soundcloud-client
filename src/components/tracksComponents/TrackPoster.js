import React from 'react';

export default function TrackPoster(props) {
    const track = props.track;
    return (
        <div className="song-image"
             style={{backgroundImage: `url(${track.artwork_url})`}}>
            <div className="toggle-play-button-detail">
                <div className="toggle-play-button-detail-icon">
                    <i className={props.isPlaying && props.playingTrackId === track.id ? "fa fa-pause" : "fa fa-play"}/>
                </div>
            </div>
        </div>
    )
}
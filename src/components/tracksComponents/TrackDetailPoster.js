import React from 'react';


export default function TrackPoster(props) {
    const {track, trackIndex, playTracks} = props;

    return (
        <div className="song-list-item-image"
             style={{backgroundImage: `url(${track.artwork_url})`}}
        >
            <div className="toggle-play-button-detail"
                onClick={() => playTracks({
                    track_id: track.id,
                    track_index: trackIndex
                })}
            >
                <div className="toggle-play-button-detail-icon">
                    <i className="fa fa-play"/>
                </div>
            </div>
        </div>
    )
}
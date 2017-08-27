import React from 'react';
import TrackDetailPoster from './TrackDetailPoster';
import TrackTitle from './TrackTitle';
import TrackUser from './TrackUser';
import TrackStatus from './TrackStatus';
import TrackDetailWave from './TrackDetailWave';

export default function TrackDown(props) {
    const allTracks = props.track;
    if (allTracks.length === 0) {
        return null;
    }
    const track = allTracks.map(track => {
        return (
                <div className="song-list-item" key={track.id}>
                    <TrackDetailPoster className="song-list-item-image" track={track}/>
                    <div className="song-list-item-info-wrap">
                        <div className="song-list-item-info">
                            <div className="song-list-item-title">
                                <TrackTitle title={track.title}/>
                            </div>
                            <div className="song-list-item-info-extra">
                                <div className="song-list-item-user">
                                    <TrackUser track={track}/>
                                </div>
                                <div className="song-list-item-stats">
                                    <TrackStatus likesCount={track.favoritings_count}
                                                 playsCount={track.playback_count}
                                                 commentsCount={track.comment_count}
                                                 description=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <TrackDetailWave imageSrc={track.waveform_url}/>
                </div>
        )
    });
    return (
        <div className="tab-content">
            {track}
        </div>
    )
}
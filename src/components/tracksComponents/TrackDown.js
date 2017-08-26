import React from 'react';
import TrackPoster from './TrackPoster';
import TrackTitle from './TrackTitle';
import TrackUser from './TrackUser';
import TrackStatus from './TrackStatus';
import TrackWave from './TrackWave';

export default function TrackDown(props) {
    const allTracks = props.track;
    if (allTracks.length === 0) {
        return <div>loading...</div>
    }
    console.log(typeof(allTracks));
    const track = allTracks.map(track => {
        return (
            <div key={track.id}>
                <div className="col-7-10">
                    <div className="song-card">
                        <div className="song-card-detail-container">
                            <div className="song-main">
                                <div className="song-poster">
                                    <TrackPoster track={track}/>
                                </div>
                                <div className="song--info--wrap">
                                    <TrackTitle title={track.title}/>
                                    <TrackUser track={track}/>
                                    <TrackStatus likesCount={track.favoritings_count}
                                                 playsCount={track.playback_count}
                                                 commentsCount={track.comment_count}
                                                 description=""
                                    />
                                </div>
                                <TrackWave imageSrc={track.waveform_url}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    });
    return (
        <div>
            {track}
        </div>
    )
}

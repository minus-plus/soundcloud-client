import React from 'react';
import TrackPoster from './TrackPoster';
import TrackTitle from './TrackTitle';
import TrackUser from './TrackUser';
import TrackStatus from './TrackStatus';
import TrackWave from './TrackWave';
import TrackComments from './TrackComments';

export default function TrackTop(props) {
    const track = props.track;
    return (
        <div className="container">
            <div className="content">
                <TrackComments comments={props.comments}/>
                <div className="grid">
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
                                                     description={track.description.substring(0, 100)}
                                        />
                                    </div>
                                    <TrackWave imageSrc={track.waveform_url}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


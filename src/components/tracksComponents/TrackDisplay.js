import React from 'react';
import TrackPoster from './TrackPoster';
import TrackTitle from './TrackTitle';
import TrackUser from './TrackUser';
import TrackStatus from './TrackStatus';
import TrackWave from './TrackWave';
import TrackComments from './TrackComments';
import TrackDown from './TrackDown';

export default function TrackTop(props) {
    const track = props.track;
    return (
        <div className="myContainer">
            <div className="container">
                <div className="content">
                    <div className="grid">
                        <div className="col-7-10">
                            <div className="song card">
                                <div className="song-main">
                                    <div className="song-poster">
                                        <TrackPoster track={track}/>
                                    </div>
                                    <div className="song--info--wrap">
                                        <div className="song-title">
                                            <TrackTitle title={track.title}/>
                                        </div>
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
                            <TrackDown track={props.trackContent}/>
                        </div>
                        <div className="col-3-10">
                            <TrackComments className="float-right" comments={props.comments}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


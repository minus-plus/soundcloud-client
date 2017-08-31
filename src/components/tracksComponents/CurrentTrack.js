/**
 * Created by Yun on 8/31/2017.
 */
import React, {Component} from 'react';
import TrackTitle from './TrackTitle';
import TrackUser from './TrackUser';
import TrackStatus from './TrackStatus';
import TrackWave from '../../containers/TrackWaveContainer';
class CurrentTrack extends Component {
    constructor(props) {
        super(props);
        this.togglePlay = this.togglePlay.bind(this);
    }

    togglePlay(track) {
        // toggleIsPlaying
        if (track.track_id !== this.props.playingTrackId) {
            this.props.playTracks(track);
        } else {
            this.props.toggleIsPlaying();
        }
    }

    render() {
        let {currentTrack, playTracks} = this.props;

        return(
            <div className="song-main">
                <div className="song-poster" onClick={() => this.togglePlay({
                    track_id: currentTrack.id,
                    track_index: 0
                })}>
                    <div className="song-image"
                         style={{backgroundImage: `url(${currentTrack.artwork_url})`}}>
                        <div className="toggle-play-button-detail">
                            <div className="toggle-play-button-detail-icon">
                                <i className={this.props.isPlaying && this.props.playingTrackId === currentTrack.id ? "fa fa-pause" : "fa fa-play"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="song--info--wrap">
                    <div className="song-title">
                        <TrackTitle title={currentTrack.title}/>
                    </div>
                    <TrackUser track={currentTrack}/>
                    <TrackStatus likesCount={currentTrack.favoritings_count}
                                 playsCount={currentTrack.playback_count}
                                 commentsCount={currentTrack.comment_count}
                    />
                </div>
                <TrackWave imageSrc={currentTrack.waveform_url} trackId={currentTrack.id} index={0} />
            </div>
        )
    }
}

export default CurrentTrack;


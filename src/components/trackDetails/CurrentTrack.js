/**
 * Created by Yun on 8/31/2017.
 */
import React, {Component} from 'react';
import TrackTitle from './sharedComponents/TrackTitle';
import TrackUser from './sharedComponents/TrackUser';
import TrackStatus from './sharedComponents/TrackStatus';
import WaveForm from '../../containers/WaveFormContainer';

class CurrentTrack extends Component {
    constructor(props) {
        super(props);
        this.togglePlay = this.togglePlay.bind(this);
    }

    togglePlay(track) {
        // toggleIsPlaying
        console.log(track.track_index);
        if (track.track_id !== this.props.playingTrackId) {
            this.props.playTracks(track);
        } else {
            this.props.toggleIsPlaying();
        }
    }

    render() {
        let {currentTrack} = this.props;
        let image_url;
        if (currentTrack.artwork_url !== null) {
            image_url = currentTrack.artwork_url.toString().replace('-large', '-t300x300');
        }

        return (
            <div className="song-main">
                <div className="song-poster" onClick={() => this.togglePlay({
                    track_id: currentTrack.id,
                    track_index: 0
                })}>
                    <div className="song-image"
                         style={{backgroundImage: `url(${image_url || '/images/track-avatar.jpg'})`}}>
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
                <WaveForm waveformUrl={currentTrack.waveform_url}
                          dispatch={this.props.dispatch}
                          playSong={this.props.playTracks}
                          isActive={currentTrack.id === this.props.playingTrackId}
                          duration={currentTrack.duration}
                          track={currentTrack}
                          index={0}
                />
            </div>
        )
    }
}

export default CurrentTrack;


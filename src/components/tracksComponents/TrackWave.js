import React, {Component} from 'react';

class TrackWave extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(track) {
        // toggleIsPlaying
        console.log(track.track_id);
        console.log(this.props.playingTrackId);
        if (track.track_id !== this.props.playingTrackId) {
            this.props.playTracks(track);
        } else {
            this.props.toggleIsPlaying();
        }
    }

    render() {
        const {currentTrack} = this.props;
        const {isPlaying, playingTrackId} = this.props;
        return (
            <div className="song-waveform">
                <div className="waveform">
                    <canvas className="waveform-canvas"/>
                    <div className="waveform-image-container" onClick={() => this.handleClick({
                        track_id: currentTrack.id,
                        track_index: 0
                    })}>
                        <img src={this.props.imageSrc} className="waveform-image" alt="song waveform"/>
                        <div className="waveform-image-bg"></div>
                        <div>
                            <div className="waveform-play-highlight"></div>
                            <div className="waveform-play-highlight-icon">
                                <i className={isPlaying && playingTrackId === currentTrack.id ? "fa fa-pause" : "fa fa-play"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TrackWave
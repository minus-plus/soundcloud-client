import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {CLIENT_ID} from '../constants/auth';

function getStreamUrl(playList, trackIndex) {
    if (trackIndex === undefined || !playList || trackIndex < 0 || trackIndex >= playList.length) {
        return "";
    }
    const trackId = playList[trackIndex].id;
    return `https://api.soundcloud.com/tracks/${trackId}/stream?client_id=${CLIENT_ID}`;
}

function formatTime(time) {
    return Math.floor(time / 60) + ':' + ('0' + (time % 60)).slice(-2);
}

class Player extends Component {
    constructor(props) {
        super(props);
        // BIND EVENTHANDLERs
        this.togglePlay = this.togglePlay.bind(this);
        this.handlePlayPrev = this.handlePlayPrev.bind(this);
        this.handlePlayNext = this.handlePlayNext.bind(this);

        //BIND MEDIAN EVENT HANDLERs

        this.handleLoadedMetadata = this.handleLoadedMetadata.bind(this);
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
        this.handleLoadStart = this.handleLoadStart.bind(this);
    }


    componentDidMount() {
        // INITIALIZE PLAYLIST

        // REGISTER MEDIA EVENT HANDLERS
        const audioElement = ReactDOM.findDOMNode(this.refs.audio);
        audioElement.addEventListener('loadedmetadata', this.handleLoadedMetadata, false);
        audioElement.addEventListener('timeupdate', this.handleTimeUpdate, false);
        audioElement.addEventListener('loadStart', this.handleLoadStart, false);
    }

    componentDidUpdate(prevProps) {
        const audioElement = ReactDOM.findDOMNode(this.refs.audio);
        if (!audioElement) {
            return;
        }
        const {isPlaying} = this.props;
        if (isPlaying) {
            audioElement.play();
        } else {
            audioElement.pause()
        }
    }

    componentWillUnmount() {
        const audioElement = ReactDOM.findDOMNode(this.refs.audio);
        audioElement.removeEventListener('loadedmetadata', this.handleLoadedMetadata, false);
        audioElement.removeEventListener('timeupdate', this.timeupdate, false);
        audioElement.removeEventListener('loadStart', this.handleLoadStart, false);
    }

    togglePlay() {
        this.props.toggleIsPlaying();
    }

    handlePlayPrev() {
        const {
            playingTrackIndex,
            playList
        } = this.props;
        if (playingTrackIndex > 0) {
            // SET playingTrackIndex -= 1
            const track_index = playingTrackIndex - 1;
            const track_id = playList[track_index].id;
            this.props.playTracks({track_index, track_id});
        }
    }

    handlePlayNext() {
        const {
            playingTrackIndex,
            playList
        } = this.props;
        if (playingTrackIndex < playList.length - 1) {
            const track_index = playingTrackIndex + 1;
            const track_id = playList[track_index].id;
            this.props.playTracks({track_index, track_id});
        }
    }

    // MEDIA EVENT HANDLERS
    handleLoadStart() {
        this.props.setDuration(0);
        this.props.setCurrentTime(0);
    }
    handleLoadedMetadata() {
        const audioElement = ReactDOM.findDOMNode(this.refs.audio);
        // DISPATCH AN ACTION
        this.props.setDuration(Math.floor(audioElement.duration));
    }

    handleEnded() {
        // PLAY NEXT
        this.handlePlayNext();
    }

    handleTimeUpdate() {
        const audioElement = ReactDOM.findDOMNode(this.refs.audio);
        const currentTime = Math.floor(audioElement.currentTime);
        if (currentTime === this.props.currentTime) {
            return;
        } else {
            this.props.setCurrentTime(currentTime);
        }
    }


    renderDurationBar() {
        const { currentTime, duration } = this.props;

        if (duration !== 0) {
            const width = currentTime / duration * 100;
            return (
                <div
                    className="player-seek-duration-bar"
                    style={{  width: `${width}%` , border: "1px solid red"}}
                >
                    <div
                        className="player-seek-handle"
                    >
                    </div>
                </div>
            );
        }

        return null;
    }

    render() {
        const {
            playingTrackIndex,
            playList,
            isPlaying,
            duration,
            currentTime
        } = this.props;
        const playingTrack = playList[playingTrackIndex];
        return (
            <div className="player">
                <audio id="audio" ref="audio" src={getStreamUrl(playList, playingTrackIndex)}  />
                <div className="container">
                    <div className="player-main">
                        <div className="player-section player-info">
                            {playingTrack ? <div>Playing | {playingTrack.title}</div> : null}
                        </div>
                        <div className="player-section">
                            <div
                                className="player-button"
                                onClick={this.handlePlayPrev}
                            >
                                <i className="fa fa-backward" aria-hidden="true"></i>
                            </div>

                            <div
                                className="player-button"
                                onClick={this.togglePlay}
                            >
                                <i className={isPlaying ? "fa fa-pause" : "fa fa-play"} aria-hidden="true"></i>
                            </div>

                            <div
                                className="player-button"
                                onClick={this.handlePlayNext}
                            >
                                <i className="fa fa-forward" aria-hidden="true"></i>
                            </div>
                        </div>


                        <div className="player-section player-seek">
                            <div className="player-seek-bar-wrap" onClick={this.seek}>
                                <div className="player-seek-bar" ref="seekBar">
                                    {this.renderDurationBar()}
                                </div>
                            </div>

                            <div className="player-time">
                                <div>
                                    {formatTime(currentTime)} / {formatTime(duration)}
                                </div>
                            </div>
                        </div>

                        <div className="player-section player-seek">
                            <div
                                className="player-button"
                            >
                                <i className="fa fa-repeat" />
                            </div>
                            <div
                                className="player-button"
                            >
                                <i className="fa fa-random" />
                            </div>
                            <div
                                className="player-button"
                            >
                                <i className="fa fa-list" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Player;
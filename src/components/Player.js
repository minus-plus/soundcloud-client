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
        // audioElement.removeEventListener('play', this.handlePlay, false);
        // audioElement.removeEventListener('pause', this.handlePause, false);
        audioElement.removeEventListener('loadedmetadata', this.handleLoadedMetadata, false);
        audioElement.removeEventListener('timeupdate', this.timeupdate, false);
        audioElement.removeEventListener('loadStart', this.handleLoadStart, false);
    }


    togglePlay() {
        this.props.toggleIsPlaying();
    }

    handlePlayPrev() {
        const {playingTrackIndex} = this.props;
        if (playingTrackIndex > 0) {
            // SET playingTrackIndex -= 1
            this.props.playTracks(playingTrackIndex - 1);
        }
    }

    handlePlayNext() {
        const {
            playingTrackIndex,
            playList
        } = this.props;
        if (playingTrackIndex < playList.length - 1) {
            // SET playingTrackIndex -= 1
            this.props.playTracks(playingTrackIndex + 1);
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
                <audio id="audio" ref="audio" src={getStreamUrl(playList, playingTrackIndex)} controls />
                <div className="container">
                    <div className="player-main">
                        <div className="player-section player-info">
                            {playingTrack ? <div>Playing | {playingTrack.title}</div> : null}
                        </div>
                        <div className="player-section">
                            <div>
                                <button onClick={this.handlePlayPrev}> {"prev"} </button>
                            </div>
                            <div
                                className="player-button"
                                onClick={this.togglePlay}
                            >
                                <button>{isPlaying ? "Pause" : "Play"}</button>
                            </div>
                            <div>
                                <button onClick={this.handlePlayNext}> {"next"} </button>
                            </div>

                            <div>
                                Duration {formatTime(duration)}
                            </div>
                            <div>
                                CurrentTime {formatTime(currentTime)}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Player;
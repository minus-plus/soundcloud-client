import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {CLIENT_ID} from '../constants/auth';

function getStreamUrl(track) {
    return `https://api.soundcloud.com/tracks/${track.id}/stream?client_id=${CLIENT_ID}`;
}

function formatTime(time) {
    return Math.floor(time / 60) + ':' + ('0' + (time % 60)).slice(-2);
}

class Player extends Component {
    constructor(props) {
        super(props);
        // bind eventHandlers
        this.togglePlay = this.togglePlay.bind(this);

        //BIND MEDIAN EVENT HANDLERs
        this.handlePlay = this.handlePlay.bind(this);
        this.handlePause = this.handlePause.bind(this);
        this.handleLoadedMetadata = this.handleLoadedMetadata.bind(this);
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);

    }


    componentDidMount() {
        // REGISTER MEDIA EVENT HANDLERS
        const audioElement = ReactDOM.findDOMNode(this.refs.audio);
        audioElement.addEventListener('play', this.handlePlay, false);
        audioElement.addEventListener('pause', this.handlePause, false);
        audioElement.addEventListener('loadedmetadata', this.handleLoadedMetadata, false);
        audioElement.addEventListener('timeupdate', this.handleTimeUpdate, false);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.playingTrack && prevProps.playingTrack.id === this.props.playingTrack.id) {
            return;
        }
        ReactDOM.findDOMNode(this.refs.audio).play();
    }

    componentWillUnmount() {
        audioElement.removeEventListener('play', this.handlePlay, false);
        audioElement.removeEventListener('pause', this.handlePause, false);
        audioElement.removeEventListener('loadedmetadata', this.handleLoadedMetadata, false);
        audioElement.removeEventListener('timeupdate', this.timeupdate, false);
    }


    togglePlay() {
        const audioElement = ReactDOM.findDOMNode(this.refs.audio);
        const {isPlaying} = this.props;
        if (!isPlaying) {
            audioElement.play();
        } else {
            audioElement.pause();
        }
    }

    // MEDIA EVENT HANDLERS
    handleLoadedMetadata() {
        const audioElement = ReactDOM.findDOMNode(this.refs.audio);
        // DISPATCH AN ACTION
        this.props.setDuration(Math.floor(audioElement.duration));
    }

    handlePlay() {
        this.props.toggleIsPlaying();
    }

    handlePause() {
        this.props.toggleIsPlaying();
    }


    handleEnded() {

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
            playingTrack,
            isPlaying,
            duration,
            currentTime
        } = this.props;
        return (
            <div className="player">
                <audio id="audio" ref="audio" src={getStreamUrl(playingTrack)} controls />
                <div className="container">
                    <div className="player-main">
                        <div className="player-section player-info">
                            {playingTrack.id ? <div>Playing | {playingTrack.title}</div> : null}
                        </div>
                        <div className="player-section">
                            <div
                                className="player-button"
                                onClick={this.togglePlay}
                            >
                                <button>{isPlaying ? "Pause" : "Play"}</button>
                            </div>
                            <div>
                                Duration {formatTime(duration)}
                            </div>
                            <div>
                                CurrentTime {formatTime(currentTime)}
                            </div>
                            <div>
                                <button> {"<<<<"} </button>
                            </div>
                            <div>
                                <button> {">>>>"} </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Player;
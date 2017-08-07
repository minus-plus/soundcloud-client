import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {CLIENT_ID} from '../constants/auth';

function getStreamUrl(track) {
    return `https://api.soundcloud.com/tracks/${track.id}/stream?client_id=${CLIENT_ID}`;
}

class Player extends Component {
    constructor(props) {
        super(props);
        // bind eventHandlers
        this.togglePlay = this.togglePlay.bind(this);

        //BIND MEDIAN EVENT HANDLERs
        this.handlePlay = this.handlePlay.bind(this);
        this.handlePause = this.handlePause.bind(this);
    }


    componentDidMount() {
        // REGISTER MEDIA EVENT HANDLERS
        const audioElement = ReactDOM.findDOMNode(this.refs.audio);
        audioElement.addEventListener('play', this.handlePlay, false);
        audioElement.addEventListener('pause', this.handlePause, false);
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
    handlePlay() {
        console.log(this.props);
        this.props.toggleIsPlaying();
    }

    handlePause() {
        console.log(this.props);
        this.props.toggleIsPlaying();
    }

    render() {
        const {playingTrack, isPlaying} = this.props;
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
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Player;
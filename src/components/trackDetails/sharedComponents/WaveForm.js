import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {setCurrentTime} from '../../../actions/playerActions';

const propTypes = {
    currentTime: PropTypes.number,
    dispatch: PropTypes.func.isRequired,
    duration: PropTypes.number,
    isActive: PropTypes.bool,
    playSong: PropTypes.func,
    waveformUrl: PropTypes.string,
};

function offsetLeft(element) {
    let curr = element;
    let offset = 0;
    while (curr) {
        offset += curr.offsetLeft;
        curr = curr.offsetParent;
    }
    return offset;
}

class Waveform extends Component {
    constructor(props) {
        super(props);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = {
            isCanvas: false,
            seekPercent: 0,
        };
    }

    handleMouseDown() {
        const {isActive, dispatch, duration} = this.props;
        if (!isActive) {
            return;
        }

        const {seekPercent} = this.state;
        const audioElement = document.getElementById('audio');
        if (!audioElement) {
            return;
        }

        const currentTime = Math.floor(seekPercent * (duration / 1000));
        audioElement.currentTime = currentTime;
        dispatch(setCurrentTime(currentTime));
    }

    handleMouseMove(e) {
        const {isActive} = this.props;
        if (!isActive) {
            return;
        }
        const seekPercent = (e.clientX - offsetLeft(e.currentTarget)) / e.currentTarget.offsetWidth;
        this.setState({seekPercent});
    }

    handleMouseLeave() {
        this.setState({seekPercent: 0});
    }

    renderClickable() {
        const {isActive, playSong} = this.props;
        const seekPercent = this.state.seekPercent * 100;
        if (!isActive) {
            return (
                <div>
                    <div className="waveform-play-highlight"/>
                    <div
                        className="waveform-play-highlight-icon"
                        onClick={playSong.bind(this, {
                            track_id: this.props.track.id,
                            track_index: this.props.index
                        })}
                    >
                        <i className="icon ion-ios-play"/>
                    </div>
                </div>
            );
        }

        if (seekPercent) {
            return (
                <div>
                    <div className="waveform-seek-line" style={{width: `${seekPercent}%`}}/>
                    <div className="waveform-seek-bar" style={{width: `${seekPercent}%`}}/>
                </div>
            );
        }

        return null;
    }

    renderImage() {
        const {waveformUrl} = this.props;
        if (waveformUrl.indexOf('json') > -1) {
            return null;
        }

        return (
            <img
                alt="song waveform"
                className="waveform-image"
                src={waveformUrl}
            />
        );
    }

    renderWaveform() {
        const {currentTime, duration, isActive, track} = this.props;
        const width = isActive ? currentTime / (duration / 1000) * 100 : 0;
        console.log(track);
        return (
            <div
                className="waveform-image-container"
                onMouseDown={this.handleMouseDown}
                onMouseLeave={this.handleMouseLeave}
                onMouseMove={this.handleMouseMove}
            >
                {this.renderImage()}
                <div className="waveform-image-bg" style={{width: `${width}%`}}/>
                {this.renderClickable()}
            </div>
        );
    }

    render() {
        return (
            <div className="song-waveform">
                <div className="waveform">
                    <canvas className="waveform-canvas"></canvas>
                    {this.renderWaveform()}
                </div>
            </div>
        );
    }
}

Waveform.propTypes = propTypes;

export default Waveform;
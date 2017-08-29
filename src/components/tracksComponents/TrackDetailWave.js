import React from 'react';

export default function TrackDetailWave(props) {
    return (
        <div className="song-list-item-waveform">
            <div className="waveform">
                <canvas className="waveform-canvas"/>
                <div className="waveform-image-container">
                    <img src={props.imageSrc} className="waveform-image" alt="song waveform"/>
                    <div className="waveform-image-bg" style={{width: 0}}></div>
                    <div>
                        <div className="waveform-play-highlight"></div>
                        <div className="waveform-play-highlight-icon">
                            <i className="fa fa-play"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

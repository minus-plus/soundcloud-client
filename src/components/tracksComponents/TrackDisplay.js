import React, {Component} from 'react';
import TrackPoster from './TrackPoster';
import TrackTitle from './TrackTitle';
import TrackUser from './TrackUser';
import TrackStatus from './TrackStatus';
import TrackWave from './TrackWave';
import TrackComments from './TrackComments';
import TrackDown from './TrackDown';
import Player from '../../containers/PlayerContainer';

class TrackDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false
        };
        props.getTracksInfo(this.props.id);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(track) {
        // toggleIsPlaying
        if (track.track_id !== this.props.playingTrackId) {
            this.props.playTracks(track);
        } else {
            this.props.toggleIsPlaying();
        }
    }

    render() {
        const {track} = this.props;
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',this.props);
        if (!track || track.length === 0) {
            return <div>loading...</div>
        }
        return (
            <div className="myContainer">
                <div className="container">
                    <div className="content">
                        <div className="grid">
                            <div className="col-7-10">
                                <div className="song card">
                                    <div className="song-main">
                                        <div className="song-poster" onClick={() => this.handleClick({
                                            track_id: track.id,
                                            track_index: track.id
                                        })}>
                                            <div className="song-image"
                                                 style={{backgroundImage: `url(${track.artwork_url})`}}>
                                                <div className="toggle-play-button-detail">
                                                    <div className="toggle-play-button-detail-icon">
                                                        <i className={this.props.isPlaying && this.props.playingTrackId === track.id ? "fa fa-pause" : "fa fa-play"}/>
                                                    </div>
                                                </div>
                                            </div>
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
                                <TrackDown track={this.props.tracks}/>
                            </div>
                            <div className="col-3-10">
                                <TrackComments className="float-right" comments={this.props.comments}/>
                            </div>
                        </div>
                    </div>
                </div>
                <Player playList={track}

                />
            </div>
        )
    }
}

export default TrackDisplay;


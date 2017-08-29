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
        console.log(track);
        if (track.track_id !== this.props.playingTrackId) {
            this.props.playTracks(track);
        } else {
            this.props.toggleIsPlaying();
        }
    }

    render() {
        const {tracksList} = this.props;
        const topTrack = tracksList[0];
        if (!tracksList || tracksList.length === 0 || !topTrack) {
            return <div>loading...</div>
        }
        console.log(topTrack);
        return (
            <div className="myContainer">
                <div className="container">
                    <div className="content">
                        <div className="grid">
                            <div className="col-7-10">
                                <div className="song card">
                                    <div className="song-main">
                                        <div className="song-poster" onClick={() => this.handleClick({
                                            track_id: topTrack.id,
                                            track_index: 0,
                                            playList: topTrack
                                        })}>
                                            <div className="song-image"
                                                 style={{backgroundImage: `url(${topTrack.artwork_url})`}}>
                                                <div className="toggle-play-button-detail">
                                                    <div className="toggle-play-button-detail-icon">
                                                        <i className={this.props.isPlaying && this.props.playingTrackId === topTrack.id ? "fa fa-pause" : "fa fa-play"}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="song--info--wrap">
                                            <div className="song-title">
                                                <TrackTitle title={topTrack.title}/>
                                            </div>
                                            <TrackUser track={topTrack}/>
                                            <TrackStatus likesCount={topTrack.favoritings_count}
                                                         playsCount={topTrack.playback_count}
                                                         commentsCount={topTrack.comment_count}
                                                         description={topTrack.description.substring(0, 100)}
                                            />
                                        </div>
                                        <TrackWave imageSrc={topTrack.waveform_url}/>
                                    </div>
                                </div>
                                <TrackDown track={tracksList.slice(1)}/>
                            </div>
                            <div className="col-3-10">
                                <TrackComments className="float-right" comments={this.props.comments}/>
                            </div>
                        </div>
                    </div>
                </div>
                <Player playList={this.props.track}
                        playingTrackIndex={0}
                />
            </div>
        )
    }
}

export default TrackDisplay;


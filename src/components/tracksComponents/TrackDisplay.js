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
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const id = this.props.params.id;
        this.props.getTrackDetails(id);
        this.props.getComments(id);
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

    getIndexInTracklist(track, playList) {
        for (let i = 0; i < playList.length; i++) {
            if (track.id === playList[i].id) {
                return i;
            }
        }
        return -1;
    }


    render() {
        let {currentTrack, relatedTracks, playList, playTracks} = this.props;

        console.log('L47 ..... ', !currentTrack.id, this.props);
        if (!currentTrack.id) {
            return <div>loading...</div>
        }
        const trackIndex = this.getIndexInTracklist(currentTrack, playList);
        return (
            <div className="myContainer">
                <div className="container">
                    <div className="content">
                        <div className="grid">
                            <div className="col-7-10">
                                <div className="song card">
                                    <div className="song-main">
                                        <div className="song-poster" onClick={() => this.handleClick({
                                            track_id: currentTrack.id,
                                            track_index: 0
                                        })}>
                                            <div className="song-image"
                                                 style={{backgroundImage: `url(${currentTrack.artwork_url})`}}>
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
                                        <TrackWave imageSrc={currentTrack.waveform_url}/>
                                    </div>
                                </div>
                                <TrackDown tracks={relatedTracks}  playTracks={playTracks}/>
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


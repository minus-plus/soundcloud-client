import React, {Component} from 'react';
import TrackPoster from './TrackPoster';
import TrackTitle from './TrackTitle';
import TrackUser from './TrackUser';
import TrackStatus from './TrackStatus';
import TrackWave from './TrackWave';
import TrackComments from './TrackComments';
import TrackDown from './TrackDown';
import Player from '../Player';

class TrackTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false
        }
    }

    render() {
        console.log(this.props);
        const {track} = this.props;
        return (
            <div className="myContainer">
                <div className="container">
                    <div className="content">
                        <div className="grid">
                            <div className="col-7-10">
                                <div className="song card">
                                    <div className="song-main">
                                        <div className="song-poster">
                                            <TrackPoster track={track} isPlaying={this.state.isPlaying}/>
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
                                <TrackDown track={this.props.trackContent}/>
                            </div>
                            <div className="col-3-10">
                                <TrackComments className="float-right" comments={this.props.comments}/>
                            </div>
                        </div>
                    </div>
                </div>
                <Player playList={this.props.trackContent}/>
            </div>
        )
    }
}

export default TrackTop;


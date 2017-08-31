/**
 * Created by Yun on 8/31/2017.
 */
import React, {Component} from 'react';

class Track extends Component {
    constructor(props) {
        super(props);
        this.isLoading = false;
        this.state = {
            isPlaying: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', this.onScroll, false);
        this.props.getTracks();
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.onScroll, false);
    }

    togglePlay(track) {
        // toggleIsPlaying
        if (track.track_id !== this.props.playingTrackId) {
            this.props.playTracks(track);
        } else {
            this.props.toggleIsPlaying();
        }
    }


    render() {
        const {playingTrackId, isPlaying} = this.props;
        return (
            <div>
                {
                    this.props.tracksList.map((track, track_index) => {
                        const username = track.user ? track.user.username : "";
                        let title = track.title || "";
                        title = title.split('-')[1] || title.substring(0, 12);
                        title = title.split('(')[0] || title;
                        const avatar_url = track.user ? track.user.avatar_url : "";
                        const id = track.id || "";
                        return (
                            <div className="col-1-5 clearfix" key={track_index}>
                                <div className="song-card">
                                    <div className="song-card-container"
                                         onClick={() => this.handleClick({
                                             track_index: track_index,
                                             track_id: track.id
                                         })}
                                    >
                                        <div className="song-card-image"
                                             style={{backgroundImage: `url(${ track.artwork_url || '/images/track-avatar.jpg'})`}}>
                                        </div>
                                        <div className="toggle-play-button">
                                            <i className={isPlaying && playingTrackId === track.id ? "fa fa-pause" : "fa fa-play"}
                                            > </i>
                                        </div>
                                    </div>

                                    <div className="song-card-user clearfix">
                                        < img alt="user avatar" className="song-card-user-image" src={avatar_url}/>
                                        <div className="song-card-details">
                                            <Link to={`/track/${id}`}>
                                                <span className="song-card-title">{title}</span>
                                            </Link>
                                            <Link>
                                                <span
                                                    className="song-card-user-username">{username.substring(0, 6)}</ span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="return-to-top" onClick={this.handleScrollToTop}>
                                    <i className="fa fa-angle-up" aria-hidden="true"></i>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Track;


import React, {Component} from 'react';
import {Link} from 'react-router';

class TracksList extends Component {
    constructor(props) {
        super(props);
        this.isLoading = false;
        this.state = {
            isPlaying: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.onScroll = this.onScroll.bind(this);
        this.toggleLoading = this.toggleLoading.bind(this);
        this.handleScrollToTop = this.handleScrollToTop.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', this.onScroll, false);
        this.props.getTracks();
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.onScroll, false);
    }

    handleClick(track) {
        // toggleIsPlaying
        if (track.track_id !== this.props.playingTrackId) {
            this.props.playTracks(track);
        } else {
            this.props.toggleIsPlaying();
        }
    }

    toggleLoading() {
        this.isLoading = !this.isLoading;
    }

    onScroll(event) {
        if (!this.props.next_href || this.isLoading) {
            return;
        }

        const th = 20;
        let scrollTop = event.srcElement.body.scrollTop;
        if (scrollTop >= document.documentElement.offsetHeight - window.innerHeight - th) {
            this.toggleLoading();
            this.props.loadMoreTracks(this.props.next_href, this.toggleLoading);
        }
    }

    handleScrollToTop() {
        window.scrollTo(0, 0);
    }

    render() {
        console.log(this.props.tracksList);
        const {playingTrackId, isPlaying} = this.props;
        return (
            <div>
                {
                    this.props.tracksList.map((track, track_index) => {
                        const username = track.user ? track.user.username : "";
                        const title = track.title || "";
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
                                                <a className="song-card-title">{title.substring(0, 6)}</ a>
                                            </Link>
                                            <a className="song-card-user-username"
                                               title="House">{username.substring(0, 6)}</ a>

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

export default TracksList;


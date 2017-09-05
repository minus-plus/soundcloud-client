/**
 * Created by Yun on 8/31/2017.
 */
import React, {Component} from 'react';
import TrackTitle from './trackDetails/sharedComponents/TrackTitle';
import TrackUser from './trackDetails/sharedComponents/TrackUser';
import TrackStatus from './trackDetails/sharedComponents/TrackStatus';

import {Link} from 'react-router';

class Track extends Component {
    constructor(props) {
        super(props);
        this.isLoading = false;
        this.state = {
            isPlaying: false
        };
        this.togglePlay = this.togglePlay.bind(this);
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
        const {playingTrackId, isPlaying, track, track_index} = this.props;

        const username = track ? track.user.username : "";
        let image_url;
        if (track.artwork_url !== null) {
            image_url = track.artwork_url.toString().replace('-large', '-t300x300');
        }
        let title = track.title || "";
        // title = title.split('-')[1] || title.substring(0, 12);
        // title = title.split('(')[0] || title;
        let avatar_url = track.user ? track.user.avatar_url : "";
        return (
            <div className="song-list-item" key={track.id}>
                <div className="song-list-item-image"
                     style={{backgroundImage: `url(${ image_url || '/images/track-avatar.jpg'})`}}
                >
                    <div className="toggle-play-button-detail"
                         onClick={() => this.togglePlay({
                             track_id: track.id,
                             track_index: track_index
                         })}
                    >
                        <div className="toggle-play-button-detail-icon">
                            <i className={isPlaying && playingTrackId === track.id ? "fa fa-pause" : "fa fa-play"}/>
                        </div>
                    </div>
                </div>
                <div className="song-list-item-info-wrap">
                    <div className="song-list-item-info">
                        <div className="song-list-item-title">
                            <Link className="song-username" to={`/track/${track.id}`}>
                                {title}
                            </Link>
                        </div>
                        <div className="song-list-item-info-extra">
                            <div className="song-list-item-user">
                                <div className="song-user">
                                    <div alt="user avatar" className="song-user-image"
                                         style={{backgroundImage: `url(${avatar_url})`}}>
                                    </div>
                                    {username}
                                </div>
                            </div>
                            <div className="song-list-item-stats">
                                <div className="song-stats">
                                    <span className="song-stats-icon">
                                        <i className="fa fa-heart"></i>
                                        <span>{track.favoritings_count}</span>
                                    </span>

                                    <span className="song-stats-icon">
                                        <i className="fa fa-play"></i>

                                        <span>{track.playback_count}</span>
                                    </span>

                                    <span className="song-stats-icon">
                                        <i className="fa fa-comment"></i>

                                        <span>{track.comment_count}</span>
                                    </span>

                                    <span className="song-stats-icon">
                                        <i className="fa fa-download"></i>
                                        &nbsp;&nbsp;
                                        <span>{track.download_count}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Track;


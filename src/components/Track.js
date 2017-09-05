/**
 * Created by Yun on 8/31/2017.
 */
import React, {Component} from 'react';
import TrackTitle from './trackDetails/sharedComponents/TrackTitle';
import TrackUser from './trackDetails/sharedComponents/TrackUser';
import TrackStatus from './trackDetails/sharedComponents/TrackStatus';

import {Link} from 'react-router';

function formatDuration(d) {
    let t = d / 1000;
    let fd = [];
    while (t ^ 0 !== 0) {
        let c = ('00' + ((t % 60) | 0));
        fd.unshift(c.substring(c.length - 2));
        t = t / 60;
    }
    return fd.join(":");
}

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

        const username = track.user ? track.user.username : "";
        let image_url;
        if (track.artwork_url !== null) {
            image_url = track.artwork_url.toString().replace('-large', '-t300x300');
        }
        let title = track.title || "";
        // title = title.split('-')[1] || title.substring(0, 12);
        // title = title.split('(')[0] || title;
        let avatar_url = track.user ? track.user.avatar_url : "";
        return (
            <div className="track-list-item" key={track.id}>
                <div className="track-list-item-image"
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
                <div className="track-list-item-info">
                    <div className="track-list-item-info-header">

                        <div className="track-list-item-title">
                            <div className="track-user">
                                <div alt="user avatar" className="track-user-image"
                                     style={{backgroundImage: `url(${avatar_url})`}}>
                                </div>
                                <Link className="track-username"
                                      to={`/user/${track.user.id}`}>{username}
                                </Link>
                            </div>
                            {title}
                        </div>
                        <div className="track-duration">
                            {formatDuration(track.duration)}
                        </div>
                    </div>
                    <div className="track-list-item-info-footer">

                        <div className="track-list-item-stats">

                            <div className="track-stats-icon">
                                <i className="fa fa-play"></i>

                                <span>{track.playback_count}</span>
                            </div>

                            <div className="track-stats-icon">
                                <i className="fa fa-heart"></i>
                                <span>{track.likes_count}</span>
                            </div>


                            <div className="track-stats-icon">
                                <i className="fa fa-comment"></i>

                                <span>{track.comment_count}</span>
                            </div>

                            <div className="track-stats-icon">
                                <i className="fa fa-download"></i>
                                <span>{track.download_count}</span>
                            </div>
                        </div>
                        <div className="comment-button">
                            Comments
                            <i className="fa fa-comment"></i>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}

export default Track;


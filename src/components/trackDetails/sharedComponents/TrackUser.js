import React from 'react';
import {Link} from 'react-router';

export default function TrackUser (props) {
    const track = props.track;
    return (
        <div className="song-user">
            <div alt="user avatar" className="song-user-image"
                 style={{backgroundImage: `url(${track.avatar_url})`}}>
            </div>
            <Link className="song-username"
                  to={`/user/${track.id}`}>{track.username}</Link>
        </div>
    )
}
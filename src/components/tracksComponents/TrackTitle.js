import React from 'react';

export default function TrackTitle(props) {
    const title = props.title;
    return (
        <div className="song--info">
            <div className="song-title">
                {title}
            </div>
        </div>
    )
}
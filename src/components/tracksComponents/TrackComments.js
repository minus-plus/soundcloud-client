import React from 'react';
import SidebarContent from './SidebarContent';

export default function TrackComments(props) {
    if (props.comments.length === 0) {
        return <div></div>
    }
    return (
        <div className="sidebar">
            <SidebarContent comments={props.comments}/>
        </div>
    );
}
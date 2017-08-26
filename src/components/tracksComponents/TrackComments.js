import React from 'react';
import SidebarContent from './SidebarContent';

export default function TrackComments(props) {
    if (props.comments.length === 0) {
        return <div>loading...</div>
    }
    console.log(props.comments);
    return (
        <div>
            <SidebarContent comments={props.comments}/>
        </div>
    );
}
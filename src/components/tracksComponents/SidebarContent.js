import React from 'react';
import moment from 'moment';

export default function SidebarContent(props) {
    let myComments = props.comments;
    if (myComments.length === 0) {
        return <div>loading...</div>
    }

    function compare(a,b) {
        if (a.timestamp < b.timestamp)
            return -1;
        if (a.timestamp > b.timestamp)
            return 1;
        return 0;
    }

    myComments = myComments.sort(compare);

    const comment = myComments.map(comment => {
        console.log(comment.timestamp);
        if (comment.timestamp === null) {
            comment.timestamp = 0;
        }
        let time = moment(comment.timestamp).format('mm:ss');
        return (
            <div className="comment" key={comment.id}>
                <div className="comment-image" style={{backgroundImage: `url(${comment.user.avatar_url})`}}></div>
                <div className="comment-info">
                    <div className="comment-comment">{comment.body}</div>
                    <div className="comment-username">{comment.user.username}</div>
                </div>
                <div className="comment-time">{time}</div>
            </div>
        )
    });
    return (
        <div className="comments">
            <div className="comments-header">
                <div className="comments-header-title">
                    Comments
                </div>
            </div>
            <div className="sidebar-content">
                {comment}
            </div>
        </div>
    )
}
import React from 'react';

export default function SidebarContent(props) {
    const myComments = props.comments;
    if (myComments.length === 0) {
        return <div>loading...</div>
    }

    const comment = myComments.map(comment => {
        return (
            <div className="comment" key={comment.id}>
                {comment.body}
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
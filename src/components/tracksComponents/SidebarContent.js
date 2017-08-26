import React from 'react';

export default function SidebarContent(props) {
    const myComments = props.comments;
    if (myComments.length === 0) {
        return <div>loading...</div>
    }

    const comment = myComments.map(comment => {
        return (
            <div className="col-3-10" key={comment.id}>
                <div className="sidebar">
                    <div className="comments">
                        <div className="comments-header">
                            <div className="comments-header-title">
                                {comment.body}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    });
    return (
        <div>
            {comment}
        </div>
    )
}
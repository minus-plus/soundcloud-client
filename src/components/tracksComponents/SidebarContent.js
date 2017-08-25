import React from 'react';

export default function SidebarContent(props) {
    return (
        <div>
            <div className="col-3-10">
                <div className="sidebar">
                    <div className="comments">
                        <div className="comments-header">
                            <div className="comments-header-title">
                                {props.comments}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
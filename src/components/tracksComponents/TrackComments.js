import React, {Component} from 'react';
import SidebarContent from './SidebarContent';

class TrackComments extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.comments.length === 0) {
            return <div>loading...</div>
        }
        console.log(this.props.comments);
        return (
            <div>
                <SidebarContent comments={this.props.comments}/>
            </div>
        );
    }
}

export default TrackComments
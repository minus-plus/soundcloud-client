import React, {Component} from 'react';
import SidebarContent from './SidebarContent';

class TrackComments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    render() {
        console.log(this.state.comments);
        return (
            <div>
                <SidebarContent comments={this.state.comments}/>
            </div>
        );
    }
}

export default TrackComments
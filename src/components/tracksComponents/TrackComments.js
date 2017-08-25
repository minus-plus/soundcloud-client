import React, {Component} from 'react';
import axios from 'axios';
import SidebarContent from './SidebarContent';

class TrackComments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        axios.get(`http://api.soundcloud.com/comments/${this.props.id}?client_id=a281614d7f34dc30b665dfcaa3ed7505`)
            .then(res => {
                this.setState({
                    ...this.state, comments: res.data
                })
            })
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
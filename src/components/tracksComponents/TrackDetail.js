import React, {Component} from 'react';
import axios from 'axios';
import NavbarMenu from '../NavbarMenu';
import TrackDsiplay from './TrackDisplay';
import TrackComments from './TrackComments';

class TrackDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            myTrack: {},
            comments: {},
            tracks:{}
        };
    }

    componentDidMount() {
        const trackId = this.props.params.id;
        console.log(this.state.comments);
        axios.get(`http://api.soundcloud.com/tracks/${trackId}?client_id=a281614d7f34dc30b665dfcaa3ed7505`)
            .then(res => {
                this.setState({
                    ...this.state, myTrack: res.data
                }, () => {
                    const user = this.state.myTrack.user.id;
                    console.log(user);
                    axios.get(`http://api.soundcloud.com/users/${user}/tracks?client_id=a281614d7f34dc30b665dfcaa3ed7505`)
                        .then(res => {
                            this.setState({
                                ...this.state, tracks: res.data
                            })
                        })
                })
            });
        axios.get(`http://api.soundcloud.com/tracks/${trackId}/comments?client_id=a281614d7f34dc30b665dfcaa3ed7505`)
            .then(res => {
                this.setState({
                    ...this.state, comments: res.data
                })
            });
    }

    render() {
        console.log(this.state.myTrack);
        console.log(this.state.comments);
        console.log(this.state.tracks);
        const track = this.state.myTrack;
        if (!track || track.user === undefined) {
            return (
                <div>
                    loading...
                </div>
            )
        } else {
            return (
                <div>
                    <NavbarMenu/>
                    <TrackDsiplay track={track}/>
                    <TrackComments comments={this.state.comments}/>
                </div>
            )
        }
    }
}

export default TrackDetail;
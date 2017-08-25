import React, {Component} from 'react';
import axios from 'axios';
import NavbarMenu from '../NavbarMenu';
import TrackDsiplay from './TrackDisplay';

class TrackDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            myTrack: {}
        };
    }

    componentWillMount() {
        const trackId = this.props.params.id;
        console.log(trackId);
        console.log(this.state.myTrack);
        axios.get(`http://api.soundcloud.com/tracks/${trackId}?client_id=a281614d7f34dc30b665dfcaa3ed7505`)
            .then(res => {
                this.setState({
                    ...this.state, myTrack: res.data
                })
            })
    }

    render() {
        console.log(this.state.myTrack);
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
                    {this.state.hey}
                    <TrackDsiplay track={track}/>
                </div>
            )
        }
    }
}

export default TrackDetail;
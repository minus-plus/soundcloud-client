import React, {Component} from 'react';
import {Link} from 'react-router';

import Track from './Track'

class TracksList extends Component {
    constructor(props) {
        super(props);
        this.isLoading = false;
        this.state = {
            isPlaying: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.onScroll = this.onScroll.bind(this);
        this.toggleLoading = this.toggleLoading.bind(this);
        this.handleScrollToTop = this.handleScrollToTop.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', this.onScroll, false);
        this.props.getTracks();
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.onScroll, false);
    }

    handleClick(track) {
        // toggleIsPlaying
        if (track.track_id !== this.props.playingTrackId) {
            this.props.playTracks(track);
        } else {
            this.props.toggleIsPlaying();
        }
    }

    toggleLoading() {
        this.isLoading = !this.isLoading;
    }

    onScroll(event) {
        if (!this.props.next_href || this.isLoading) {
            return;
        }

        const th = 20;
        let scrollTop = event.srcElement.body.scrollTop;
        if (scrollTop >= document.documentElement.offsetHeight - window.innerHeight - th) {
            this.toggleLoading();
            this.props.loadMoreTracks(this.props.next_href, this.toggleLoading);
        }
    }

    handleScrollToTop() {
        window.scrollTo(0, 0);
    }

    render() {
        const {playingTrackId, isPlaying, playTracks} = this.props;
        return (
            <div>
                {
                    this.props.tracksList.map((track, track_index) => {
                        const props = {playingTrackId, isPlaying, track, track_index, playTracks};
                        return(
                            <Track key={track_index} {...props} />
                        )
                    })
                }
            </div>
        );
    }
}

export default TracksList;


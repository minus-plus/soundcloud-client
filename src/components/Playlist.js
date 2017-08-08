import React, {Component} from 'react';

class Playlist extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getTracks();
    }

    render() {
        return(
            <div>
                {
                    this.props.tracks.map((track, track_index) => {
                        return (
                            <div className="track" key={track_index}>
                                {track.title}
                                <button type="button" onClick={() => this.props.playTracks(track_index)}>Play</button>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Playlist;
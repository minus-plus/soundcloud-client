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
                    this.props.tracks.map((track, key) => {
                        return (
                            <div className="track" key={key}>
                                {track.title}
                                <button type="button" onClick={() => this.props.playTracks(track)}>Play</button>
                            </div>

                        )
                    })
                }
            </div>
        );
    }
}

export default Playlist;
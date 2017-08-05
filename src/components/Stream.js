import React, {Component} from 'react';
import ReacttDOM from 'react-dom';

import {CLIENT_ID} from '../constants/auth';

class Stream extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getTracks();

    }

    componentDidUpdate() {
        const audioElement = ReacttDOM.findDOMNode(this.refs.audio);
        if (!audioElement) {
            return;
        }
        if (this.props.activeTrack) {
            audioElement.load();
            audioElement.play();
        } else {
            audioElement.pause();
        }
    }


    render() {
        // console.log('.............', this.props);
        console.log('rerendering playder with activeTrack is ', this.props.activeTrack)
        const {activeTrack} = this.props;
        return (
            <div>
                <div>
                    {
                        this.props.user ?  <div>{this.props.user.username}</div>
                            : <button onClick={this.props.onAuth} type="button">Login</button>
                    }

                </div>
                <br/>
                <div>
                    {
                        this.props.tracks.map((track, key) => {
                            return (
                                <div className="track" key={key}>
                                    {track.origin.title}
                                    <button type="button" onClick={() => this.props.onPlay(track)}>Play</button>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    {activeTrack ? <div>Playing {activeTrack.origin.title}</div> : null}
                    {
                        activeTrack ?
                            <audio id="audio" ref="audio" controls>
                                <source src={`https://api.soundcloud.com/tracks/${activeTrack.origin.id}/stream?client_id=${CLIENT_ID}`}  />
                                Your browser does not support the audio element.
                            </audio> :
                            null
                    }


                </div>

            </div>

        );
    }
}


export default Stream;
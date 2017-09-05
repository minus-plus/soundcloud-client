import React, {Component} from 'react';

import '../../style/nav-bar.scss';
import '../../style/trackslist.scss';
import '../../style/player.scss';
import '../../style/trackscomponent.scss';
import '../../style/waveform.scss';
import '../../style/notfound.scss';

import TracksList from '../containers/TracksListContainer';

class Stream extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="parent-container">
                <br/>
                <div className="body-container">
                    <TracksList />
                </div>

            </div>

        );
    }
}


export default Stream;


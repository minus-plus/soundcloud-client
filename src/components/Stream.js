import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../style/nav-bar.css';
import '../../style/player.css';
import '../../style/trackslist.css';
import '../../style/player.scss';

import NavbarMenu from '../containers/NavbarContainer';
import TracksList from '../containers/TracksListContainer';
import Player from '../containers/PlayerContainer';

class Stream extends Component {
    constructor(props) {
        super(props);
    }


    componentDidUpdate() {

    }


    render() {
        return (
            <div className="parent-container">
                <NavbarMenu />
                <br/>
                <div className="body-container">
                    <TracksList />
                </div>

                <Player />
            </div>

        );
    }
}


export default Stream;


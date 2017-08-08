import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../style/nav-bar.css';
import '../../style/player.css';
import '../../style/playlist.css';

import NavbarMenu from '../containers/NavbarContainer';
import Playlist from '../containers/PlaylistContainer';
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
                    <Playlist />
                </div>
                <div className="foot-player">
                    <Player />
                </div>
            </div>

        );
    }
}


export default Stream;


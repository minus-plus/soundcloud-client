import React, {Component} from 'react';
import ReactDOM from 'react-dom';

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
            <div>
                <NavbarMenu />
                <br/>
                <Playlist />
                <Player />

            </div>

        );
    }
}


export default Stream;
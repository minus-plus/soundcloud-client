import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../style/nav-bar.scss';
import '../../style/trackslist.scss';
import '../../style/player.scss';
import '../../style/trackscomponent.css';

import NavbarMenu from '../containers/NavbarContainer';
import TracksList from '../containers/TracksListContainer';
import Player from '../containers/PlayerContainer';
import Toolbar from '../containers/ToolbarContainer';
class Stream extends Component {
    constructor(props) {
        super(props);
    }


    componentDidUpdate() {

    }


    render() {
        return (
            <div className="parent-container">
                <br/>
                <div className="body-container">
                    <Toolbar/>
                    <div className="col-4-5 tracks-container">
                        <TracksList />
                    </div>
                    
                </div>

                <Player />
            </div>

        );
    }
}


export default Stream;


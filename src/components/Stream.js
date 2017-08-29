import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../style/nav-bar.scss';
import '../../style/trackslist.scss';
import '../../style/player.scss';
import '../../style/trackscomponent.css';

import NavbarMenu from '../containers/NavbarContainer';
import TracksList from '../containers/TracksListContainer';
import Player from '../containers/PlayerContainer';
import Popout from './Popout';

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
                    <div className="col-1-5 category-vertical">
                        Category
                    </div>
                    <TracksList />
                </div>

                <Player />
            </div>

        );
    }
}


export default Stream;


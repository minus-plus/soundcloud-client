import React, {Component} from 'react';
import NavbarMenu from '../containers/NavbarContainer';
import Player from '../containers/PlayerContainer';

class App extends Component {

    render() {
        return(
            <div>
                <NavbarMenu />
                {React.cloneElement(this.props.children, {dispatch: this.props.dispatch})}
                <Player />
            </div>
        )
    }
}

export default App;



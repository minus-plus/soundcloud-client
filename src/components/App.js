import React, {Component} from 'react';
import NavbarMenu from '../containers/NavbarContainer';

class App extends Component {

    render() {
        return(
            <div>
                <NavbarMenu />
                {this.props.children}
            </div>
        )
    }
}

export default App;



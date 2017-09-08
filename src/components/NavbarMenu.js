import React, {Component} from 'react';
import NavSearch from '../containers/NavSearchContainer';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {user} = this.props;
        return (
            <div className="top-nav-bar">
                <div className="top-nav-bar-container">
                    <div className="top-nav-item">
                        <a className="nav-nav-item-link active" href="/" title=""><i className="fa fa-soundcloud website-icon"></i>SoundCloud Client</a>
                    </div>
                    <div className="top-nav-item">
                        <div className="nav-search">
                            <i className="fa fa-search" aria-hidden="true"> </i>
                            <NavSearch/>
                        </div>
                        <div className="nav-logo">
                            <i className="fa fa-user fa-2x sign-in" onClick={this.props.onAuth}
                               aria-hidden="true">
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Navbar;

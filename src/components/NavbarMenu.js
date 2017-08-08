import React, {Component} from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {user} = this.props;
        return(
            <div>
                <div className="nav">
                    <div className="container clearfix">
                        <div className="nav-logo">
                            <button onClick={this.props.onAuth} type="button">Login</button>
                        </div>
                        <div className="nav-nav float-left">
                            {/*<div className="nav-nav-item">*/}
                                {/*<a className="nav-nav-item-link active" href="/#/songs" title="">SoundRedux</a>*/}
                            {/*</div>*/}
                            {/*<div className="nav-nav-item">*/}
                                {/*<a className="nav-nav-user-link " href="/#/me/stream" title="">*/}
                                    {/*<span className="nav-nav-user-link-text">stream</span>*/}
                                {/*</a>*/}
                            {/*</div>*/}
                            {/*<div className="nav-nav-item">*/}
                                {/*<a className="nav-nav-user-link " href="/#/me/likes" title="">*/}
                                    {/*<span className="nav-nav-user-link-text">likes</span></a>*/}
                            {/*</div>*/}
                            {/*<div className="nav-nav-item nav-playlists popover ">*/}
                                {/*<div className="nav-nav-user-link ">*/}
                                    {/*<span className="nav-nav-user-link-text">playlists</span>*/}
                                    {/*<i className="icon ion-chevron-down"></i>*/}
                                    {/*<i className="icon ion-chevron-up"></i>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        </div>
                        <div className="nav-nav float-right">
                            {/*<div className="nav-nav-item">*/}
                                {/*<div className="nav-search">*/}
                                    {/*<i className="icon ion-search">*/}
                                    {/**/}
                                    {/*</i>*/}
                                    {/*<input type="text" className="nav-search-input" placeholder="SEARCH" />*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            <div className="nav-nav-item">
                                <div className="nav-user popover ">
                                    <div className="nav-user-link">
                                        <button onClick={this.props.onAuth} type="button">Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )

    }
}

export default Navbar;

import React, {Component} from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    
    handleKeyPress(e){
        if(e.key === 'Enter') {
            console.log(e.target.value);
        }
    }

    render() {
        const {user} = this.props;
        return(
            <div>
                <div className="nav">
                    <div className="container clearfix">
                        <div className="nav-nav float-left">
                            <div className="nav-nav-item">
                                <a className="nav-nav-item-link active" href="/" title="">Sound Client</a>
                            </div>
                        </div>
                        <div className="nav-nav float-right">
                            <div className="nav-nav-item">
                                <div className="nav-search">
                                    <i className="fa fa-search" aria-hidden="true"> </i>
                                    <input type="text" className="nav-search-input" placeholder="SEARCH" onKeyPress={this.handleKeyPress} />
                                </div>
                                
                            </div>
                            <div className="nav-nav-item">
                                <div className="nav-logo">
                                    <i className="fa fa-user fa-2x sign-in" onClick={this.props.onAuth} aria-hidden="true"></i>
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

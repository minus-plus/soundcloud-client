import React, {Component} from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {user} = this.props;
        return(
            <div>
                {
                    user?
                        <div>{user.username}</div> :
                        <button onClick={this.props.onAuth} type="button">Login</button>
                }

            </div>
        )

    }
}

export default Navbar;
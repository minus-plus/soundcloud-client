import React, {Component} from 'react';

class Popout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };

        this.toggleIsOpen = this.toggleIsOpen.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(event) {
        if (this.state.open && !this.popout.contains(event.target)) {
            this.setState({
                open: false
            })
        }
}

    toggleIsOpen() {
        this.setState({
            open: !this.state.open
        })
    }


    render() {
        const {open} = this.state;
        const {className, children} = this.props;
        return (
            <div
                ref={(ele) => this.popout = ele}
                className={`${className} popout`}
                onClick={this.toggleIsOpen}
            >
                {children[0]}
                {open ? children[1] : null}

            </div>
        )
    }
}

export default Popout;
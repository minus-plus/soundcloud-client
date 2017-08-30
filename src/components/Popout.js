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
        console.log("L23 Popout", this.state.open && !this.popout.contains(event.target))
        console.log("L24 Popout", this.state.open);
        if (this.state.open && !this.popout.contains(event.target)) {
            this.setState({
                open: false
            })
        } else {
            console.log("L30 Popout", this.state.open)
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
        const icon = React.cloneElement(children[0], {
            onClick: this.toggleIsOpen
        });
        return (
            <div
                ref={(ele) => this.popout = ele}
                className={`${className} popout`}
            >
                {icon}
                {open ? children[1] : null}

            </div>
        )
    }
}

export default Popout;
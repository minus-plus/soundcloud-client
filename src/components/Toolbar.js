import React from 'react';
import '../../style/toolbar.scss';

class Toolbar extends React.Component{
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            show:false,
            className:''
        };
        this.handleShow = this.handleShow.bind(this);
    }
    
    handleClick(e){
        const value = e.target.innerHTML;
        const {searchTracks} = this.props;
        searchTracks({path:'songs', query:{q:value}});
    }
    
    handleShow(){
        this.setState({
            show: !this.state.show,
            className: this.state.show ? '':'toolbar-1'
        })
    }
    
    render(){
        return(
            <div className="toolbar">
                <div className={this.state.className}>
                    {this.state.show ? <div className="toolbar-items">
                                            <div className="category-top">
                                                Category
                                                <i className="fa fa-window-close fa-1g category-close" aria-hidden="true" onClick={this.handleShow}> </i>
                                            </div>
                                            <li className="toolbar-item-li" onClick={this.handleClick}>Summer</li>
                                            <li className="toolbar-item-li" onClick={this.handleClick}>Hip-Hop</li>
                                            <li className="toolbar-item-li" onClick={this.handleClick}>Pop</li>
                                            <li className="toolbar-item-li" onClick={this.handleClick}>Mood</li>
                                            <li className="toolbar-item-li" onClick={this.handleClick}>Latino</li>
                                            <li className="toolbar-item-li" onClick={this.handleClick}>Country</li>
                                            <li className="toolbar-item-li" onClick={this.handleClick}>Workout</li>
                                            <li className="toolbar-item-li" onClick={this.handleClick}>Chill</li>
                                            <li className="toolbar-item-li" onClick={this.handleClick}>Rock</li>
                                            <li className="toolbar-item-li" onClick={this.handleClick}>R&B</li>
                                        </div>
                                    :
                                        <div className="category-button" onClick={this.handleShow}>
                                            <i className="fa fa-align-justify fa-3x" aria-hidden="true"><div className="category-space"> Category  </div> </i>
                                            
                                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Toolbar;
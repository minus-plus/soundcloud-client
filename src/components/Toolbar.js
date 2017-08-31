import React from 'react';
import '../../style/toolbar.scss';

class Toolbar extends React.Component{
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e){
        const value = e.target.innerHTML;
        const {searchTracks} = this.props;
        searchTracks({path:'songs', query:{q:value}});
    }
    
    render(){
        return(
            <div className="toolbar">
                <div className="toolbar-items">
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
            </div>
        )
    }
}

export default Toolbar;
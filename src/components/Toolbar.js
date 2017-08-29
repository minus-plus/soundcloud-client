import React from 'react';

class Toolbar extends React.Component{
    
    render(){
        return(
            <div className="toolbar">
                <div className="container">
                    <div className="toolbar-items">
                        <a className="toolbar-item toolbar-genre " href="/#/songs?q=chill" title="">chill</a>
                        <a className="toolbar-item toolbar-genre " href="/#/songs?q=deep" title="">deep</a>
                        <a className="toolbar-item toolbar-genre " href="/#/songs?q=dubstep" title="">dubstep</a>
                        <a className="toolbar-item toolbar-genre " href="/#/songs?q=house" title="">house</a>
                        <a className="toolbar-item toolbar-genre " href="/#/songs?q=progressive" title="">progressive</a>
                        <a className="toolbar-item toolbar-genre " href="/#/songs?q=tech" title="">tech</a>
                        <a className="toolbar-item toolbar-genre " href="/#/songs?q=trance" title="">trance</a>
                        <a className="toolbar-item toolbar-genre " href="/#/songs?q=tropical" title="">tropical</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Toolbar;
import React, {Component} from 'react';

class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying:false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(track_index){
        // console.log("changing the isplaying state");
        // this.setState({isPlaying:!this.state.isPlaying}, ()=>{console.log(this.state.isPlaying)});
        //
        this.props.playTracks(track_index);

    }

    componentDidMount() {
        this.props.getTracks();
    }

    render() {
        return(
            <div>
                {
                    this.props.tracks.map((track, track_index) => {
                        return (
                            <div className="col-1-5 clearfix" key={track_index}>
                                <div className="song-card">
                                    <div className="song-card-container" >
                                        <div className="song-card-image" style={{backgroundImage: 'url('+"https://i1.sndcdn.com/artworks-000041124475-2lu7vg-t300x300.jpg"+')'}}>

                                        </div>
                                        <div className="toggle-play-button">
                                            <i className={this.state.isPlaying === true ?"fa fa-pause" :"fa fa-play"}
                                               onClick={() => this.handleClick(track_index)}> </i>
                                        </div>
                                    </div>

                                    <div className="song-card-user clearfix">
                                        < img alt="user avatar" className="song-card-user-image" src="https://i1.sndcdn.com/avatars-000217622831-lwr9mn-large.jpg" />
                                        <div className="song-card-details">
                                            <a className="song-card-title" title="Lana Del Rey - Summertime Sadness (Cedric Gervais Remix)">{track.title}</ a>
                                            <br/>
                                            <a className="song-card-user-username" title="House">{track.title}</ a>
                                            <div className="song-heart song-card-heart popover ">
                                                <i className="icon ion-ios-heart"> </i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Playlist;


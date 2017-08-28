import React, {Component} from 'react';

class TracksList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying:false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleClick(track){
        // toggleIsPlaying
        // send track to player
        // this.setState({isPlaying:!this.state.isPlaying}, ()=>{console.log(this.state.isPlaying)});
        
        if(track.track_id !== this.props.playingTrackId) {
            this.props.playTracks(track);
        } else {
            this.props.toggleIsPlaying();
        }
    }

    componentDidMount() {
        this.props.getTracks();
        document.addEventListener('scroll', this.handleScroll);
    }
    
    handleScroll(event){
        let scrollTop = event.srcElement.body.scrollTop;
        // console.log('scroll *********** window',scrollTop);
        // console.log('scroll *********** document',document.documentElement.offsetHeight-window.innerHeight);
        if(scrollTop >= document.documentElement.offsetHeight-window.innerHeight - 1){
            console.log('scroll for more');
        }
    }

    render() {
        const {playingTrackId, isPlaying} = this.props;
        return(
            <div>
                {
                    this.props.tracksList.map((track, track_index) => {
                        const username = track.user ? track.user.username : "";
                        const title = track.title || "";
                        return (
                            <div className="col-1-5 clearfix" key={track_index}>
                                <div className="song-card">
                                    <div className="song-card-container"
                                         onClick={() => this.handleClick({track_index: track_index, track_id: track.id})}
                                    >
                                        <div className="song-card-image" style={{backgroundImage: `url(${ track.artwork_url || '/images/track-avatar.jpg'})`}}>
                                        </div>
                                        <div className="toggle-play-button">
                                            <i className={ isPlaying && playingTrackId=== track.id ?"fa fa-pause" :"fa fa-play"}
                                               > </i>
                                        </div>
                                    </div>

                                    <div className="song-card-user clearfix">
                                        < img alt="user avatar" className="song-card-user-image" src={track.user.avatar_url} />
                                        <div className="song-card-details">
                                            <a className="song-card-title" >{title.substring(0, 6)}</ a>
                                            <a className="song-card-user-username" title="House">{username.substring(0, 6)}</ a>

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

export default TracksList;


import React, {Component} from 'react';
import '../../style/playlist.scss'

class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {playList=[]} = this.props;
        const trackList = playList.map((track, index) => {
            return(
              <li
                key={`${track.id}-${index}`}
              >
                  <div className="track-item">
                      <img className="playlist-image"
                        src={track.artwork_url}
                      />
                      <div className="track-title">{track.title}</div>
                  </div>
              </li>
            );
        });

        return(
            <div
                className="playlist"
            >
                <div className="playlist-header">
                    {'HOUSE'}
                </div>
                <div className="playlist-body">
                    <ul className="track-list">
                        {trackList}
                    </ul>
                </div>
                <div className="playlist-footer">
                    Total {playList.length} tracks
                </div>
            </div>
        )
    }

}

export default Playlist;
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TrackDisplay from '../components/tracksComponents/TrackDisplay';
import {getTracks, playTracks, toggleIsPlaying, loadMoreTracks, getTracksInfo} from '../actions';

function mapStateToProps(state) {
    return {
        track: state.tracksList.topTrack,
        tracks: state.tracksList.relatedTracks,
        comments: state.tracksList.comments
        // tracksList: state.tracksList.tracksList,
        // playingTrackId: state.player.playingTrackId,
        // isPlaying: state.player.isPlaying,
        // next_href: state.tracksList.next_href
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getTracksInfo,
            // getTracks: getTracks,
            // playTracks: playTracks,
            // toggleIsPlaying: toggleIsPlaying,
            // loadMoreTracks: loadMoreTracks
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackDisplay);

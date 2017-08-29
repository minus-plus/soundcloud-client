import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TrackDisplay from '../components/tracksComponents/TrackDisplay';
import {getTracks, playTracks, toggleIsPlaying, loadMoreTracks, getTracksInfo} from '../actions';

function mapStateToProps(state) {
    return {
        topTrack: state.tracksList.topTrack,
        tracksList: state.tracksList.tracksList,
        comments: state.tracksList.comments,
        playingTrackId: state.player.playingTrackId,
        isPlaying: state.player.isPlaying,
        next_href: state.tracksList.next_href
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getTracksInfo,
            // getTracks: getTracks,
            playTracks,
            toggleIsPlaying
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackDisplay);

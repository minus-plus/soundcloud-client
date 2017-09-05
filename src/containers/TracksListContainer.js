import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TracksList from '../components/TracksList';
import {getTracks, loadMoreTracks, playTracks, toggleIsPlaying, resetPlayer } from '../actions';

function mapStateToProps(state) {
    return {
        tracksList: state.tracksList.tracksList,
        playingTrackId: state.player.playingTrackId,
        isPlaying: state.player.isPlaying,
        next_href: state.tracksList.next_href
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getTracks: getTracks,
            playTracks: playTracks,
            toggleIsPlaying: toggleIsPlaying,
            loadMoreTracks: loadMoreTracks,
            resetPlayer: resetPlayer
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TracksList);

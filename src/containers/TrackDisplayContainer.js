import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TrackTop from '../components/tracksComponents/TrackDisplay';
import {getTracks, playTracks, toggleIsPlaying, loadMoreTracks} from '../actions';

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
            loadMoreTracks: loadMoreTracks
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackTop);

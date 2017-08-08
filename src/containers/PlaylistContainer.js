import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Playlist from '../components/Playlist';
import {getTracks, playTracks, toggleIsPlaying} from '../actions';

function mapStateToProps(state) {
    return {
        tracks: state.tracks.tracks,
        playingTrackId: state.player.playingTrackId,
        isPlaying: state.player.isPlaying
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getTracks: getTracks,
            playTracks: playTracks,
            toggleIsPlaying: toggleIsPlaying
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
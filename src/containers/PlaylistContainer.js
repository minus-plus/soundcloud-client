import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Playlist from '../components/Playlist';
import {getTracks, playTracks} from '../actions';

function mapStateToProps(state) {
    return {
        tracks: state.tracks.tracks
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getTracks: getTracks,
            playTracks: playTracks
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
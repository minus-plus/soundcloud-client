import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Stream from '../components/Stream';
import {auth, getTracks, playTracks} from '../actions';


function mapStateToProps(state) {
    return {
        tracks: state.tracks.tracks,
        activeTrack: state.tracks.activeTrack,
        user: state.auth.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getTracks: getTracks,
        onAuth: auth,
        onPlay: playTracks
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Stream);
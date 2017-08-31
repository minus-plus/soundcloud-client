import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TrackDown from '../components/tracksComponents/TrackDown';
import {playTracks, toggleIsPlaying} from '../actions';

function mapStateToProps(state) {
    const {isPlaying, playingTrackId} = state.player;
    return {
        isPlaying,
        playingTrackId
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            playTracks,
            toggleIsPlaying
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackDown);

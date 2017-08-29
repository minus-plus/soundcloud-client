import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TrackDisplay from '../components/tracksComponents/TrackDisplay';
import {playTracks, getTrackDetails, getComments} from '../actions';

function mapStateToProps(state) {
    const {currentTrack, relatedTracks, comments} = state.trackDetails;
    const playList = state.player.currentPlayList;
    return {
        currentTrack,
        comments,
        relatedTracks,
        playList
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getTrackDetails,
            getComments,
            playTracks,
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackDisplay);

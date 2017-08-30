import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TrackDetails from '../components/tracksComponents/TrackDetails';
import {playTracks, getTrackDetails, getComments, resetComponent} from '../actions';

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
            resetComponent
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackDetails);

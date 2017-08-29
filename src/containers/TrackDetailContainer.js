import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TrackDetail from '../components/tracksComponents/TrackDetail';

function mapStateToProps(state, ownProps) {
    return {
        trackId: ownProps.params.id,
        isPlaying: false,
        myTrack: {},
        comments: []
    }
}


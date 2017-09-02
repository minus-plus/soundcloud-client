import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import WaveForm from '../components/trackDetails/sharedComponents/WaveForm';
import {playTracks} from '../actions/playerActions';

function mapStateToProps(state) {
    return {
        currentTime: state.player.currentTime,
        playingTrackId: state.player.playingTrackId
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(
//         {
//             dispatch: dispatch
//         }, dispatch
//     )
// }

export default connect(mapStateToProps)(WaveForm);
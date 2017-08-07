import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Player from '../components/Player';
import {toggleIsPlaying} from '../actions/playerActions';



function mapStateToProps(state) {
    return {
        playingTrack: state.player.playingTrack,
        isPlaying: state.player.isPlaying
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            toggleIsPlaying
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
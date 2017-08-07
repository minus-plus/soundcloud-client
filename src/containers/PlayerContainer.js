import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Player from '../components/Player';
import {toggleIsPlaying, setDuration, setCurrentTime} from '../actions/playerActions';



function mapStateToProps(state) {
    return {
        playingTrack: state.player.playingTrack,
        isPlaying: state.player.isPlaying,
        duration: state.player.duration,
        currentTime: state.player.currentTime
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            toggleIsPlaying,
            setDuration,
            setCurrentTime
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
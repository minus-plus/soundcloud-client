import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Player from '../components/Player';
import {getPlayList, toggleIsPlaying, setDuration, setCurrentTime, playTracks} from '../actions/playerActions';



function mapStateToProps(state) {
    return {
        playList: state.tracks.tracks,
        playingTrackIndex: state.player.playingTrackIndex,
        isPlaying: state.player.isPlaying,
        duration: state.player.duration,
        currentTime: state.player.currentTime
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getPlayList,
            toggleIsPlaying,
            setDuration,
            setCurrentTime,
            playTracks
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
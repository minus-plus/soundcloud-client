import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Playlist from '../components/Playlist';

function mapStateToProps(state) {
    return {
        playList: state.tracksList.tracksList
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {

        }, dispatch
        )
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
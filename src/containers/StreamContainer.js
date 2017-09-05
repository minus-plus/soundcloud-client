import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Stream from '../components/Stream';
import {resetPlayer} from '../actions/playerActions';

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            resetPlayer
        }, dispatch
    )
}

export default connect(null, mapDispatchToProps)(Stream);
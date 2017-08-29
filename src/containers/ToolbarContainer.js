import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Toolbar from '../components/Toolbar';
import {searchTracks} from '../actions/searchActions';


function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            searchTracks:searchTracks
        }, dispatch
    )
}

export default connect(null, mapDispatchToProps)(Toolbar);
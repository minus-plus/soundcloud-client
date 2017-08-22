import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import NavSearch from '../components/NavSearch';
import {searchTracks} from '../actions/searchActions';

function mapDispatchToProps(dispatch) {
    console.log('--------------------getting tracks');
    return bindActionCreators(
        {
            searchTracks:searchTracks
        }, dispatch
    )
}

export default connect(null, mapDispatchToProps)(NavSearch);
import React, {Component} from 'react';

import CurrentTrack from "./CurrentTrack";
import TrackComments from './TrackComments';
import RelatedTracks from '../../containers/RelatedTracksContainer';

class TrackDetails extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const id = this.props.params.id;
        // console.log('Line 22, trackdisplay ', this.props.params);
        // console.log('Line 23 trackdisplay ', this.props);
        // this.props.router.push('/');
        this.props.getTrackDetails(id);
        this.props.getComments(id);
    }

    componentWillUnmount() {
        this.props.resetComponent();
    }


    render() {
        let {currentTrack, relatedTracks, playTracks} = this.props;
        if (!currentTrack.id) {
            return <div></div>
        }
        return (
            <div className="myContainer">
                <div className="container">
                    <div className="content">
                        <div className="grid">
                            <div className="col-7-10">
                                <div className="song card">
                                    <CurrentTrack currentTrack={currentTrack} playTracks={playTracks} />
                                </div>
                                <RelatedTracks tracks={relatedTracks} playTracks={this.props.playTracks} />
                            </div>
                            <div className="col-3-10">
                                <TrackComments className="float-right" comments={this.props.comments}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TrackDetails;


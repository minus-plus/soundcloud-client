import {getTracks, loadMoreTracks} from './trackActions';
import {searchTracks} from './searchActions';
import {auth} from './authActions';
import {playTracks, setDuration, toggleIsPlaying} from './playerActions';
import {getTracksInfo} from "./trackDetailActions";

export {
    auth,
    searchTracks,
    getTracks,
    playTracks,
    setDuration,
    toggleIsPlaying,
    loadMoreTracks,
    getTracksInfo
};
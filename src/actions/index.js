import {getTracks, loadMoreTracks} from './trackActions';
import {searchTracks} from './searchActions';
import {auth} from './authActions';
import {playTracks, setCurrentTime, setDuration, setPlaylist, toggleIsPlaying} from './playerActions';
import {getTracksInfo} from "./trackDetailActions";

export {
    auth,

    searchTracks,

    playTracks,
    setCurrentTime,
    setDuration,
    setPlaylist,
    toggleIsPlaying,

    getTracks,
    loadMoreTracks,
    getTracksInfo
};
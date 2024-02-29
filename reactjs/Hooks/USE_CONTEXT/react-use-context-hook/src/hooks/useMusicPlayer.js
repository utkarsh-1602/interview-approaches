import { useContext } from 'react';
import { MusicPlayerContext } from "../MusicPlayerContext";

const useMusicPlayer = () => {
  const [state, setState] = useContext(MusicPlayerContext);

  console.log(state)

  function playTrack(index) {
    if (index === state.currentTrackIndex) {
      togglePlay();
    } else {
      state.audioPlayer.pause();
      state.audioPlayer = new Audio(state.tracks[index].file);
      state.audioPlayer.play();
      console.log(state)
      setState(state => ({ ...state, currentTrackIndex: index, isPlaying: true }));
    }
  }

  function togglePlay() {
    if (state.isPlaying) {
      state.audioPlayer.pause();
    } else {
      state.audioPlayer.play();
    }
    setState(state => ({ ...state, isPlaying: !state.isPlaying }));
    //...state is known as the spread syntax in JavaScript. It is used to create a shallow copy of the state object. This syntax is often used in React.js or other JavaScript applications to create new objects with some properties from an existing object while also adding new properties or overriding existing ones.


    console.log(state)
  }

  function playPreviousTrack() {
    // newIndex = ((3-1) % 3 + 3) % 3;
    const newIndex = ((state.currentTrackIndex + -1) % state.tracks.length + state.tracks.length) % state.tracks.length;
    // calculate the index of the previous track in a circular manner
    playTrack(newIndex);
  }

  function playNextTrack() {
    const newIndex = (state.currentTrackIndex + 1) % state.tracks.length;
    playTrack(newIndex);
  }

  return {
    playTrack,
    togglePlay,
    currentTrackName: state.currentTrackIndex !== null && state.tracks[state.currentTrackIndex].name,
    trackList: state.tracks,
    isPlaying: state.isPlaying,
    playPreviousTrack,
    playNextTrack,
  }
};

export default useMusicPlayer;

import React, { useState } from 'react';
import LostChameleon from './assets/LostChameleon.mp3';
import Rock from './assets/TheHipsta.mp3';
import Tobu from './assets/Tobu.mp3';

const MusicPlayerContext = React.createContext([{}, () => {}]);
// When you write React.createContext([{}, () => {}]), you're providing a default value for the context. In this case, the default value is an array with an empty object {} and an empty function () => {}.

const MusicPlayerProvider = (props) => {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: 'Lost Chameleon - Genesis',
        file: LostChameleon,
      },
      {
        name: 'The Hipsta - Shaken Soda',
        file: Rock,
      },
      {
        name: 'Tobu - Such Fun',
        file: Tobu,
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  });
  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {props.children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };

import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import soundfile from './src/files/teste.ogg'
import soundfile from 'assets/teste.ogg'

function NewComponent() {
    // javascript stuff goes here
    const Player = () => (
      <AudioPlayer
      src= {soundfile}
      />
    )
  
    return (
      <Player/>
    );
  }

export default NewComponent;
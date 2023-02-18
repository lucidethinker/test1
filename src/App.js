import React from 'react';
import useAppStore from './store/store';
import './style/styles.css'

function App() {
  const { displayText, handleKeystroke } = useAppStore();

  return (
    <div className="drum-machine">
       
      <h1>Press the keys to play sounds!</h1>
      <div className="display">
      <p>{displayText}</p>
      </div>
      <button onClick={() => handleKeystroke('q')}>Q</button>
      <button onClick={() => handleKeystroke('w')}>W</button>
      <button onClick={() => handleKeystroke('e')}>E</button>
      <button onClick={() => handleKeystroke('a')}>A</button>
      <button onClick={() => handleKeystroke('s')}>S</button>
      <button onClick={() => handleKeystroke('d')}>D</button>
      <button onClick={() => handleKeystroke('z')}>Z</button>
      <button onClick={() => handleKeystroke('x')}>X</button>
      <button onClick={() => handleKeystroke('c')}>C</button>
      <audio id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"/>
      <audio id="W" src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"/>
      <audio id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"/>
      <audio id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"/>
      <audio id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"/>
      <audio id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"/>
      <audio id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"/>
      <audio id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"/>
      <audio id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"/>
      
      </div>
  
  )};




export default App;


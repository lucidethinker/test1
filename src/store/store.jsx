
import {create} from 'zustand';

const useAppStore = create((set) => ({
  displayText: '',

  keystrokeMap: {
    'q': 'Rock on!',
    'w': 'Drum Roll!',
    'e': 'Music Time!',
    'a': 'Big Hit!',
    's': 'Party On!',
    'd': 'Jamming on!',
    'z': 'Popstarts!',
    'x': 'On the mood!',
    'c': 'On the rhythm!',
  },

    playAudio: (str) => {
    const audio = document.getElementById(str);
    audio.play();
  },

  handleKeystroke: (keystroke) => {
    const { keystrokeMap, playAudio } = useAppStore.getState();

    if (keystroke in keystrokeMap) {
      const displayText = keystrokeMap[keystroke];
      set({ displayText });
      playAudio(keystroke.toUpperCase());
    }
  },
}));

export default useAppStore;

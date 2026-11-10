import { createAsciiFold } from './assets/vendor/ascii-fold/ascii-fold.js';

const stage = document.querySelector('#protein-stage');
const motionButton = document.querySelector('#protein-motion');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

if (stage && motionButton) {
  let view;
  try {
    let paused = motionPreference.matches;
    view = createAsciiFold(stage, {
      theme: 'paper',
      colour: 'ss',
      glyphs: ' 010101',
      layout: 'lr',
      seam: 'soft',
      blendFrom: 0.38,
      blendTo: 0.62,
      detail: 32,
      spin: 0,
      interactive: false,
      background: false,
      palette: {
        bg: '#fbfbf8', ink: '#17211d',
        H: '#8b3039', E: '#467c64', C: '#887b60',
      },
    });
    view.loadDefault();
    // This is a decorative animation: preserve normal touch scrolling.
    view.element.style.touchAction = 'pan-y';
    stage.classList.add('is-ready');
    motionButton.hidden = false;

    const updateMotion = () => {
      view.set({ spin: paused || document.hidden ? 0 : 0.16 });
      motionButton.textContent = paused ? 'Play rotation' : 'Pause rotation';
    };
    motionButton.addEventListener('click', () => {
      paused = !paused;
      updateMotion();
    });
    motionPreference.addEventListener('change', () => {
      paused = motionPreference.matches;
      updateMotion();
    });
    document.addEventListener('visibilitychange', updateMotion);
    updateMotion();
  } catch (error) {
    view?.destroy();
    stage.classList.remove('is-ready');
    motionButton.hidden = true;
    console.warn('Protein visualization could not load.', error);
  }
}

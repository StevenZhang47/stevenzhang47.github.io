// A silent looping replay; native controls always let visitors pause it.
const tankVideo = document.querySelector('#tank-demo');
if (tankVideo) {
  tankVideo.muted = true;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const applyMotionPreference = () => {
    tankVideo.autoplay = !reducedMotion.matches;
    if (reducedMotion.matches) {
      tankVideo.pause();
    } else {
      tankVideo.play().catch(() => {
        // Browser policies may require pressing the native play button.
      });
    }
  };
  applyMotionPreference();
  reducedMotion.addEventListener('change', applyMotionPreference);
}

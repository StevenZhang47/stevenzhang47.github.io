// Silent project replays; native controls always let visitors pause them.
document.querySelectorAll('video[autoplay]').forEach((video) => {
  video.muted = true;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const applyMotionPreference = () => {
    video.autoplay = !reducedMotion.matches;
    if (reducedMotion.matches) {
      video.pause();
    } else {
      video.play().catch(() => {
        // Browser policies may require pressing the native play button.
      });
    }
  };
  applyMotionPreference();
  reducedMotion.addEventListener('change', applyMotionPreference);
});

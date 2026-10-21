// Play a demo only while it is visible and motion is allowed.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll('video[autoplay]').forEach((video) => {
  video.muted = true;
  const disclosure = video.closest('details');
  const updatePlayback = () => {
    const shouldPlay = !reducedMotion.matches && (!disclosure || disclosure.open);
    video.autoplay = shouldPlay;
    if (shouldPlay) {
      video.play().catch(() => {
        // Native controls remain available if autoplay is blocked.
      });
    } else {
      video.pause();
    }
  };
  updatePlayback();
  disclosure?.addEventListener('toggle', updatePlayback);
  reducedMotion.addEventListener('change', updatePlayback);
});

export default defineContentScript({
  matches: ['*://*.rumble.com/*', '*://rumble.com/*'],
  main() {
    const style = document.createElement('style');
    style.textContent = `
      .thumbnail__thumb,
      .rum-video-thumbnail__image { visibility: hidden; }
    `;
    document.documentElement.appendChild(style);
  },
});

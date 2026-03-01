import './content.css';

export default defineContentScript({
  matches: ['*://*.rumble.com/*', '*://rumble.com/*'],
  main() {},
});

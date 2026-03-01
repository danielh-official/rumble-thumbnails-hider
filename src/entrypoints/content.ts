export default defineContentScript({
  matches: ['*://*.rumble.com/*', '*://rumble.com/*'],
  main() {
    const style = document.createElement('style');
    style.textContent = `
      .thumbnail__thumb {
        position: relative;
      }
    
      .thumbnail__thumb img {
        visibility: hidden;
      }
    
      .thumbnail__thumb::after {
        content: "Thumbnail Blocked By Rumble Thumbnails Hider";
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #333;
        color: #fff;
        font-size: 12px;
        text-align: center;
        padding: 8px;
        box-sizing: border-box;
      }

      .rum-ub3nis {
        display: none;
      }
    `;
    document.documentElement.appendChild(style);
  },
});

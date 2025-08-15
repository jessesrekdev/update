footer.innerHTML = `
  <div class="footer-container">
    <h2 class="footer-logo">Crazy Dev</h2>
    <div class="socials">
      <a href="#" title="TikTok">
        <img src="/res/tik-tok.png" width="30" height="30" alt="CSS3 Logo" style="display: block;">
      </a>
      <a href="#" title="YouTube">
        <img src="/res/youtube.png" width="30" height="30" alt="CSS3 Logo" style="display: block;">
      </a>
      <a href="https://t.me/+0wluDwl9G_JlYjA0" title="Telegram">
        <img src="/res/telegram.png" width="30" height="30" alt="CSS3 Logo" style="display: block;">
      </a>
      <a href="" title="Instagram">
        <img src="/res/social.png" width="30" height="30" alt="CSS3 Logo" style="display: block;">
      </a>
    </div>
    <p class="copyright" style="font-size: 15px; line-height: 1.2; font-weight: 600;">
      © 2025 Crazy Dev 🧃🔥 <br><br> Built with 
      <svg class="heart-icon" viewBox="0 0 24 24" style="vertical-align: middle; width: 18px; height: 18px; fill: red;">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09 
                 C13.09 3.81 14.76 3 16.5 3 
                 19.58 3 22 5.42 22 8.5 
                 c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
      by <br>Jesse Dev  
      <svg 
        fill="#059bff" 
        viewBox="0 0 25 25" 
        style="vertical-align: middle; width: 15px; height: 15px; margin-left: 4px;" 
        id="verified" 
        data-name="Flat Color" 
        xmlns="http://www.w3.org/2000/svg" 
        class="icon flat-color"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path id="primary" d="M21.6,9.84A4.57,4.57,0,0,1,21.18,9,4,4,0,0,1,21,8.07a4.21,4.21,0,0,0-.64-2.16,4.25,4.25,0,0,0-1.87-1.28,4.77,4.77,0,0,1-.85-.43A5.11,5.11,0,0,1,17,3.54a4.2,4.2,0,0,0-1.8-1.4A4.22,4.22,0,0,0,13,2.21a4.24,4.24,0,0,1-1.94,0,4.22,4.22,0,0,0-2.24-.07A4.2,4.2,0,0,0,7,3.54a5.11,5.11,0,0,1-.66.66,4.77,4.77,0,0,1-.85.43A4.25,4.25,0,0,0,3.61,5.91,4.21,4.21,0,0,0,3,8.07,4,4,0,0,1,2.82,9a4.57,4.57,0,0,1-.42.82A4.3,4.3,0,0,0,1.63,12a4.3,4.3,0,0,0,.77,2.16,4,4,0,0,1,.42.82,4.11,4.11,0,0,1,.15.95,4.19,4.19,0,0,0,.64,2.16,4.25,4.25,0,0,0,1.87,1.28,4.77,4.77,0,0,1,.85.43,5.11,5.11,0,0,1,.66.66,4.12,4.12,0,0,0,1.8,1.4,3,3,0,0,0,.87.13A6.66,6.66,0,0,0,11,21.81a4,4,0,0,1,1.94,0,4.33,4.33,0,0,0,2.24.06,4.12,4.12,0,0,0,1.8-1.4,5.11,5.11,0,0,1,.66-.66,4.77,4.77,0,0,1,.85-.43,4.25,4.25,0,0,0,1.87-1.28A4.19,4.19,0,0,0,21,15.94a4.11,4.11,0,0,1,.15-.95,4.57,4.57,0,0,1,.42-.82A4.3,4.3,0,0,0,22.37,12,4.3,4.3,0,0,0,21.6,9.84Z" style="fill: #059bff;"></path>
          <path id="secondary" d="M11,16a1,1,0,0,1-.71-.29l-3-3a1,1,0,1,1,1.42-1.42L11,13.59l4.29-4.3a1,1,0,0,1,1.42,1.42l-5,5A1,1,0,0,1,11,16Z" style="fill: #ffffff;"></path>
        </g>
      </svg>
    </p>
  </div>
`;

header.innerHTML = `
<div class="menu-left">
      <button class="icon-btn" title="Menu">
        <svg viewBox="0 0 24 24">
          <circle cx="5" cy="12" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="19" cy="12" r="2" />
        </svg>
      </button>
    </div>

    <a href="#" class="logo">Crazy Dev</a>

    <div class="menu-right">
      <button class="icon-btn" id="toggleTheme" title="Toggle Theme" aria-label="Toggle Theme">
        <svg id="themeIcon" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true">
          <!-- Sun group -->
          <g class="sun" style="opacity:1;">
            <circle cx="12" cy="12" r="5" fill="orange" />
            <g stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="1" x2="12" y2="4" />
              <line x1="12" y1="20" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
              <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="4" y2="12" />
              <line x1="20" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
              <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
            </g>
          </g>

          <!-- Moon group -->
          <g class="moon" style="opacity:0; transform-origin: 12px 12px; transform: scale(0.7);">
            <path d="M21 12.79A9 9 0 0111.21 3 7 7 0 0012 21a9 9 0 009-8.21z" fill="lightblue" />
          </g>
        </svg>
      </button>

      <button class="icon-btn" title="Account">
        <svg viewBox="0 0 24 24">
          <path
            d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
        </svg>
      </button>
    </div> `
export function render(myGF){
    const html = `
        <p class="eyebrow">A little something for</p>
        <h1>Happy Birthday, <span class="accent">${myGF.name}</span> 🎉</h1>
        <p class="sub">blow out the candles to open your surprise 🕯️</p>

        <div class="cake-stage">
        <svg id="cake" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
            <!-- plate -->
            <ellipse cx="110" cy="195" rx="95" ry="10" fill="#f3d9c8"/>
            <!-- bottom tier -->
            <rect x="35" y="150" width="150" height="45" rx="10" fill="#f7b8c6"/>
            <rect x="35" y="150" width="150" height="10" fill="#fcd3dd"/>
            <!-- top tier -->
            <rect x="60" y="105" width="100" height="50" rx="10" fill="#fbcfe8"/>
            <rect x="60" y="105" width="100" height="10" fill="#fde6f3"/>
            <!-- drip -->
            <path d="M60 112 Q70 130 60 140 Q80 132 90 145 Q100 128 112 144 Q122 130 132 145 Q142 128 150 142 Q158 130 160 112 Z" fill="#fff1f6" opacity="0.85"/>
            <!-- candles -->
            <g>
            <rect x="80" y="80" width="6" height="26" rx="2" fill="#fbbf24"/>
            <rect x="107" y="74" width="6" height="32" rx="2" fill="#f472b6"/>
            <rect x="134" y="80" width="6" height="26" rx="2" fill="#fbbf24"/>
            </g>
            <!-- smoke (hidden until blown) -->
            <g class="smoke" data-smoke="1"><ellipse cx="83" cy="74" rx="4" ry="7" fill="#cbb6c2"/></g>
            <g class="smoke" data-smoke="2"><ellipse cx="110" cy="68" rx="4" ry="7" fill="#cbb6c2"/></g>
            <g class="smoke" data-smoke="3"><ellipse cx="137" cy="74" rx="4" ry="7" fill="#cbb6c2"/></g>
            <!-- flames -->
            <g class="flame" data-flame="1" style="transform-origin:83px 80px;">
            <path d="M83 80 C79 73 80 66 83 62 C86 66 87 73 83 80 Z" fill="#fb923c"/>
            <path d="M83 77 C81 73 81.5 69 83 67 C84.5 69 85 73 83 77 Z" fill="#fde047"/>
            </g>
            <g class="flame" data-flame="2" style="transform-origin:110px 74px;">
            <path d="M110 74 C106 67 107 60 110 56 C113 60 114 67 110 74 Z" fill="#fb923c"/>
            <path d="M110 71 C108 67 108.5 63 110 61 C111.5 63 112 67 110 71 Z" fill="#fde047"/>
            </g>
            <g class="flame" data-flame="3" style="transform-origin:137px 80px;">
            <path d="M137 80 C133 73 134 66 137 62 C140 66 141 73 137 80 Z" fill="#fb923c"/>
            <path d="M137 77 C135 73 135.5 69 137 67 C138.5 69 139 73 137 77 Z" fill="#fde047"/>
            </g>
        </svg>
        </div>
        <p class="cake-instructions" id="instructions">click each flame to blow it out 🌬️</p>

        <div class="reveal" id="reveal">
        <div class="message-card">
            <p>${myGF.birthDayWish}</p>
            <p class="signoff">— forever yours 💕</p>
        </div>
        </div>

        <div class="divider"><span>our love story</span></div>

        <div class="timeline">
        <div class="moment">
            <div class="date">${dayjs(myGF.firstMeetDate).format('DD MMMM YYYY')}</div>
            <h3>The day we met</h3>
            <p>${myGF.firstMeetExperiance}</p>
        </div>
        <div class="moment">
            <div class="date">${dayjs(myGF.firstDate).format('DD MMMM YYYY')}</div>
            <h3>Our first date</h3>
            <p>${myGF.firstDateExperiance}</p>
        </div>
        <div class="moment">
            <div class="date">${dayjs(myGF.favMemoryDate).format('DD MMMM YYYY')}</div>
            <h3>A favorite memory</h3>
            <p>${myGF.favMemory}</p>
        </div>
        <div class="moment">
            <div class="date">Today</div>
            <h3>Still falling for you</h3>
            <p>${myGF.stillInLoveText}</p>
        </div>
        </div>

        <div class="divider"><span>why I love you</span></div>

        <div class="reasons">
        <div class="reason"><b>01.</b> ${myGF.whyILove.first}</div>
        <div class="reason"><b>02.</b> ${myGF.whyILove.second}</div>
        <div class="reason"><b>03.</b> ${myGF.whyILove.third}</div>
        <div class="reason"><b>04.</b> ${myGF.whyILove.fourth}</div>
        </div>

        <div class="footer">
        <button class="btn" id="confettiBtn">Send More Love 🎈</button>
        <p class="note">happy birthday, ${myGF.name}. I love you. 💖</p>
        </div>
    `
    document.querySelector('.js-wrap').innerHTML = html;
}

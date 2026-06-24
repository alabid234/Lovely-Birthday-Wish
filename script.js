
import { render } from "./render.js";
import myGF from "./setup.json" with { type: "json" }

render(myGF)
// floating hearts
const heartsEmoji = ['💕','💗','💖','✨','🎈'];
for(let i=0;i<14;i++){
  const h = document.createElement('div');
  h.className='heart';
  h.textContent = heartsEmoji[Math.floor(Math.random()*heartsEmoji.length)];
  h.style.left = Math.random()*100+'vw';
  h.style.animationDuration = (8+Math.random()*8)+'s';
  h.style.animationDelay = (Math.random()*10)+'s';
  h.style.fontSize = (1+Math.random()*1.2)+'rem';
  document.body.appendChild(h);
}

// candle blowing
const flames = document.querySelectorAll('.flame');
const smokes = document.querySelectorAll('.smoke');
const reveal = document.getElementById('reveal');
const instructions = document.getElementById('instructions');
let blownCount = 0;

flames.forEach((flame) => {
  flame.addEventListener('click', () => {
    if(flame.classList.contains('out')) return;
    flame.classList.add('out');
    const id = flame.dataset.flame;
    const smoke = document.querySelector('.smoke[data-smoke="'+id+'"]');
    if(smoke){
      smoke.classList.add('show');
      setTimeout(()=> smoke.classList.remove('show'), 1400);
    }
    blownCount++;
    if(blownCount === flames.length){
      instructions.textContent = "🎉 wish made — here's your surprise";
      setTimeout(()=>{
        reveal.classList.add('open');
        launchConfetti(40);
      }, 350);
    }
  });
});

function launchConfetti(count){
  const colors = ['#e2607a','#cf9d57','#ffb6c1','#fbbf24','#f472b6'];
  for(let i=0;i<count;i++){
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    p.style.left = Math.random()*100+'vw';
    p.style.background = colors[Math.floor(Math.random()*colors.length)];
    p.style.borderRadius = Math.random()>0.5 ? '50%' : '2px';
    const duration = 2.2 + Math.random()*1.6;
    const rotate = (Math.random()*720-360);
    p.style.transition = `transform ${duration}s ease-in, opacity ${duration}s ease-in`;
    document.body.appendChild(p);
    requestAnimationFrame(()=>{
      p.style.transform = `translateY(${window.innerHeight+40}px) rotate(${rotate}deg)`;
      p.style.opacity = '0';
    });
    setTimeout(()=> p.remove(), duration*1000+100);
  }
}

document.getElementById('confettiBtn').addEventListener('click', () => launchConfetti(60));

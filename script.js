function getNextSaturdayMidnight(){const n=new Date,t=new Date(n),d=n.getDay(),u=(6-d+7)%7;t.setDate(n.getDate()+u);t.setHours(0,0,0,0);return t}
const targetDate=getNextSaturdayMidnight();

function updateTimer(){const n=new Date,d=targetDate-n;if(d<=0){document.querySelector('.timer').innerHTML='<h2>Career Week Has Started!</h2>';return}
const days=Math.floor(d/(1e3*60*60*24)),hours=Math.floor(d/(1e3*60*60)%24),minutes=Math.floor(d/(1e3*60)%60),seconds=Math.floor(d/1e3%60),micro=Math.floor(performance.now()*1e3%1e6);
document.getElementById('days').textContent=days;
document.getElementById('hours').textContent=hours;
document.getElementById('minutes').textContent=minutes;
document.getElementById('seconds').textContent=seconds;
document.getElementById('microseconds').textContent=micro.toString().padStart(6,'0')}
setInterval(updateTimer,10);

// Try to auto-play music on user interaction (mobile browsers)
document.addEventListener('click',()=>{const m=document.getElementById('bg-music');if(m&&m.paused)m.play()},{once:true});
const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

btn.addEventListener("click", () => {
    music.play();
    btn.textContent = "🎵 Music Playing";
    btn.disabled = true;
});
// LEFT IMAGE FADE SLIDESHOW
const slides = document.querySelectorAll(".left-slideshow .slide");
let currentSlide = 0;

setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}, 5000); // change every 5 seconds
/* ===== CANVAS FIREWORKS ===== */
const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas(){
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

class Firework {
    constructor(){
        this.x = canvas.width / 2;
        this.y = canvas.height;
        this.targetY = Math.random() * canvas.height * 0.5;
        this.particles = [];
        this.exploded = false;
        this.color = `hsl(${Math.random() * 360},100%,60%)`;
    }

    explode(){
        for(let i = 0; i < 120; i++){
            this.particles.push({
                x: this.x,
                y: this.y,
                angle: Math.random() * Math.PI * 2,
                speed: Math.random() * 6 + 2,
                life: 100
            });
        }
        this.exploded = true;
    }

    update(){
        if(!this.exploded){
            this.y -= 6;
            if(this.y <= this.targetY) this.explode();
        }
    }

    draw(){
        if(!this.exploded){
            ctx.fillStyle = "#fff";
            ctx.fillRect(this.x, this.y, 3, 3);
        } else {
            this.particles.forEach(p => {
                p.x += Math.cos(p.angle) * p.speed;
                p.y += Math.sin(p.angle) * p.speed;
                p.life--;

                ctx.beginPath();
                ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            });
            this.particles = this.particles.filter(p => p.life > 0);
        }
    }
}

let fireworks = [];

function animateFireworks(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(Math.random() < 0.05){
        fireworks.push(new Firework());
    }

    fireworks.forEach(fw => {
        fw.update();
        fw.draw();
    });

    fireworks = fireworks.filter(fw => fw.particles.length > 0 || !fw.exploded);

    requestAnimationFrame(animateFireworks);
}

animateFireworks();

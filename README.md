# ⚡ InStep 3D

A 3D retro rhythm runner that fits directly into your browser address bar as a single Data URI under 3KB. No libraries, zero image assets, and no setup—just pure procedural HTML5 Canvas, Web Audio synthesis, and 3D perspective math.

[![Live Size](https://img.shields.io/badge/Size-3%2C002%20bytes-brightgreen?style=flat-square)](dist/data_uri.txt)
[![Hack Club Bites](https://img.shields.io/badge/Hack%20Club%20Bites-%2B22%20Points-orange?style=flat-square)](#-hack-club-bites)
[![Source](https://img.shields.io/badge/Source-unedited--game.html-blue?style=flat-square)](src/unedited-game.html)
[![License: MIT](https://img.shields.io/badge/License-MIT-lightgrey?style=flat-square)](LICENSE)

---

## 🕹️ Play Right Now (Copy & Paste)

Copy the line below, paste it into any modern browser address bar (Chrome, Edge, Safari, Firefox), and press **Enter**:

```text
data:text/html,<body style=margin:0;overflow:hidden;background:#050508><canvas id=c></canvas><script>M=Math;R1=M.random;x=c.getContext('2d');A=0;k=1;X=sc=cb=mcb=W=H=Y0=t=bt=0;hp=100;sp=.035;st=0;S=[];RS=_=>{sc=cb=mcb=X=t=bt=0;k=1;hp=100;sp=.035;st=1;S=[1,2,3,4,5,6,7].map(i=>({l:R1()*3|0,z:i*120+200,g:R1()>.8,h:0}))};RS();st=0;P=(f,y='sine',v=.2,d=.15)=>{A&&(o=A.createOscillator(),g=A.createGain(),o.type=y,o.frequency.value=f,g.gain.value=v,g.gain.linearRampToValueAtTime(0,m=A.currentTime+d),o.connect(g).connect(A.destination),o.start(),o.stop(m))};PK=_=>P(60,'sawtooth',.3,.08);onkeydown=onpointerdown=e=>{A?A.resume():A=new AudioContext;if(!st||st>1){RS();return}if(e.type[0]=='k'){k=e.keyCode==37||e.keyCode==65?M.max(0,k-1):e.keyCode==39||e.keyCode==68?M.min(2,k+1):k}else{cl=e.clientX;k=cl<W/3?M.max(0,k-1):cl>W*2/3?M.min(2,k+1):1}P(300+k*80,'triangle',.1,.06)};P3=(X,Y,Z)=>[W/2+X*(m=260/Z),Y0+Y*m];LX=l=>(l-1)*90;L=_=>{t+=.03;W==innerWidth||(W=c.width=innerWidth,H=c.height=innerHeight,Y0=H/2-20,x.textAlign='center');x.fillStyle='#090416';x.fillRect(0,0,W,H);G=x.createRadialGradient(W/2,Y0,5,W/2,Y0,75);G.addColorStop(0,'#ff007f');G.addColorStop(1,'transparent');x.fillStyle=G;x.beginPath();x.arc(W/2,Y0,75,0,7);x.fill();x.strokeStyle='#38bdf8';[-135,-45,45,135].map(lx=>{x.beginPath();x.moveTo(...P3(lx,60,40));x.lineTo(...P3(lx,60,900));x.stroke()});x.strokeStyle='rgba(168,85,247,.4)';zo=(t*sp*800)%2560;for(z=40+zo;z<900;z+=60)x.beginPath(),x.moveTo(...P3(-135,60,z)),x.lineTo(...P3(135,60,z)),x.stroke();if(st==1){X+=(LX(k)-X)*.25;(bt+=.03)>.35&&(bt=0,PK());sp=.035+sc*2e-5;for(i=S.length-1;i>=0;i--){s=S[i];s.z-=sp*120;if(!s.h&&s.z<85&&s.z>55&&M.abs(LX(s.l)-X)<35){s.h=1;cb++;cb>mcb&&(mcb=cb);sc+=(s.g?100:50)*(1+cb/5|0);hp=M.min(100,hp+6);P(s.g?880:587)}if(s.z<40){!s.h&&(cb=0,hp-=20,P(90,'sawtooth'),hp<=0&&(st=2));S.splice(i,1);S.push({l:R1()*3|0,z:850+R1()*100,g:R1()>.8,h:0});continue}if(s.z>35){[p,q]=P3(LX(s.l),60,s.z);w=18e3/s.z;h=2600/s.z;x.fillStyle=s.h?'rgba(74,222,128,.3)':s.g?'gold':'#38bdf8';x.fillRect(p-w/2,q-h/2,w,h)}}[p,q]=P3(X,55,70);x.fillStyle='#f43f5e';x.beginPath();x.moveTo(p,q-14);x.lineTo(p-16,q+12);x.lineTo(p,q+4);x.lineTo(p+16,q+12);x.fill();x.fillStyle='rgba(255,255,255,.2)';x.fillRect(W/2-100,30,200,8);x.fillStyle=hp>30?'#22c55e':'#ef4444';x.fillRect(W/2-100,30,hp*2,8);x.fillStyle='#fff';x.font='16px monospace';x.fillText(`SC:${sc} CB:${cb} MAX:${mcb}`,W/2,60)}else{x.fillStyle='rgba(0,0,0,.7)';x.fillRect(0,0,W,H);x.fillStyle='#38bdf8';x.font='bold 32px monospace';x.fillText('IN-STEP 3D',W/2,Y0-40);x.font='16px monospace';st==2?(x.fillStyle='#f43f5e',x.fillText(`GAME OVER! SC:${sc} MAX:${mcb}`,W/2,Y0+10),x.fillStyle='#38bdf8',x.fillText('CLICK OR ANY KEY TO RETRY',W/2,Y0+60)):(x.fillStyle='#e2e8f0',x.fillText('HIT RHYTHM PADS IN-STEP',W/2,Y0+10),x.fillStyle='#a855f7',x.fillText('A/D OR ARROWS OR CLICK TO HOP',W/2,Y0+40),x.fillStyle='#38bdf8',x.fillText('CLICK OR ANY KEY TO PLAY',W/2,Y0+80))}requestAnimationFrame(L)};L();</script></body>
```

Or open [`src/unedited-game.html`](src/unedited-game.html) directly in your browser.

---

## 🎮 How to Play

- **Stay In-Step:** Hop between lanes to hit incoming rhythm step pads directly on beat.
- **Controls:** Use **A / D**, **Left / Right arrow keys**, or **click Left / Center / Right** of the screen.
- **Bonus Pads:** Golden step pads give **double score (+100)** and extra health.
- **Health Bar:** Missing pads drains your health meter. Hitting consecutive steps builds your **Combo Multiplier** and restores health!
- **Audio:** Synth bassline and procedural chimes start on your first tap or keypress.

---

## 📂 Repository Structure

```text
├── src/
│   └── unedited-game.html   # Readable developer source code
├── dist/
│   ├── one-line-game.html   # Minified single-line HTML (2,985 bytes)
│   └── data_uri.txt         # Executable 1-line Data URI (3,002 bytes)
├── build.mjs                # Size verification & syntax test script
├── package.json             # npm run build / npm run dev
├── LICENSE                  # MIT License
└── README.md                # Documentation
```

---

## 🏆 Hack Club Bites Breakdown (+22 Points)

Built specifically for the Hack Club Bites challenge (fits inside $\le 3,072$ bytes):

| Category | Description | Points |
| :--- | :--- | :---: |
| **3D Rendering** | 3D perspective projection camera ($X \cdot \frac{260}{Z}$) calculating dynamic depth and moving highway rungs | **+8** |
| **Canvas API** | 60 FPS vector renderer featuring synthwave radial sun, glowing rhythm pads, and perspective craft | **+6** |
| **Web Audio API** | Real-time procedural audio engine (rhythm kick beat, lane shift tones, and chord notes) | **+5** |
| **Input Handling** | Responsive keyboard (A/D & Arrows) + 3-zone pointer/touch navigation + restart triggers | **+3** |
| **Total** | | **+22** |

---

## 🛠️ Local Development & Testing

```bash
# Verify byte budget (must be <= 3,072 bytes)
npm run build

# Start local preview server on http://localhost:8080
npm run dev
```

---

## 📜 License

MIT License

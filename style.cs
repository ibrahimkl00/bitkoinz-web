
* { margin: 0; padding: 0; box-sizing: border-box; }
html, body {
  width: 100%; height: 100%;
  background: #000; color: #fff;
  font-family: Arial, sans-serif;
  scroll-behavior: smooth; overflow: hidden;
}
html.snap-scroll, body.snap-scroll {
  scroll-snap-type: y proximity;
  overflow-y: scroll;
}
#matrix {
  position: absolute; top: 0; left: 0;
  width: 100vw; height: 100vh; z-index: 1;
}
.launcher {
  position: absolute;
  top: 50%; left: 50%; transform: translate(-50%, -50%);
  background: #000; border: 1px solid #18d4ff;
  padding: 1rem; font-family: monospace; font-size: 1.5rem;
  color: #38bcff; opacity: 0; transition: opacity .5s;
  z-index: 2; max-width: 80ch; white-space: pre-wrap;
  overflow: hidden;
  box-shadow: 0 0 12px #38bcff, 0 0 24px #1d31ff;
}
.launcher pre { margin: 0; }
#mainContent {
  display: none; opacity: 0; pointer-events: none;
  position: relative; z-index: 10; height: 100vh; overflow-y: scroll;
  transition: opacity 1.2s cubic-bezier(.85,0,.15,1);
}
.background {
  position: fixed; inset: 0;
  background: url('https://images.unsplash.com/photo-1602136773736-34d445b989cb?auto=format&fit=crop&w=1200&q=80')
              center/cover fixed;
  filter: brightness(40%) blur(5px);
  z-index: -1;
}
.hero-section {
  width: 100vw; height: 100vh;
  display: flex; align-items: center; justify-content: center;
  flex-direction: column; position: relative;
}
.logo {
  position: absolute; top: 20px; left: 50%;
  transform: translateX(-50%); width: 300px;
  filter: drop-shadow(0 0 30px #29c6ff); z-index: 3;
  animation: logoFadeIn 1.2s 0.5s both;
}
@keyframes logoFadeIn {
  from { opacity: 0; transform: translateX(-50%) scale(.85); }
  to   { opacity: 1; transform: translateX(-50%) scale(1); }
}
.hero-title {
  font-family: 'Iceland', sans-serif; font-size: 10vw;
  color: #d7f7ff; letter-spacing: .2em;
  text-shadow:
    0 0 12px #38bcff,
    0 0 30px #6dbfff,
    0 0 60px #fff,
    0 0 100px #38bcff;
  animation: neon2 1.2s ease-in-out infinite alternate;
}
@keyframes neon2 {
  0%   { text-shadow: 0 0 10px #fff,0 0 24px #4ddcff,0 0 36px #1d31ff; }
  60%  { text-shadow: 0 0 25px #fff,0 0 60px #3a60ff,0 0 120px #38bcff; }
  100% { text-shadow: 0 0 12px #fff,0 0 28px #4ddcff,0 0 60px #1d31ff; }
}
.console {
  position: absolute; bottom: 25%; left: 50%;
  transform: translateX(-50%);
  background: rgba(0,0,0,0.6); padding: 1rem;
  border: 1px solid #18d4ff; width: 80ch; max-width: 90%; min-height: 5em;
  z-index: 2; box-shadow: 0 0 12px #38bcff;
  font-size: 1.2rem;
}
.console pre {
  margin: 0; font-family: 'Courier New', monospace; font-size: 1.2rem;
  color: #3ad7ff; white-space: pre-wrap; word-wrap: break-word;
}
.product-card-container {
  scroll-snap-align: start;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
}
.product-card {
  width: 90vw;
  max-width: 450px;
  height: 70vh;
  max-height: 500px;
  background: rgba(26,26,26,0.85);
  border: 4px solid #00f0ff; border-radius: 24px;
  box-shadow: 0 0 18px #00f0ff, 0 0 36px #00f0ff;
  position: relative;
  transition: transform .7s, box-shadow .4s, border .4s;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
}
.product-card:hover {
  transform: scale(1.05);
  border: 4px solid transparent;
  border-image: linear-gradient(90deg, #6557ff 10%, #3ad7ff 70%, #a44fff 100%) 1;
  box-shadow:
    0 0 36px #a44fff,
    0 0 64px #3ad7ff,
    0 0 64px #6557ff,
    0 0 100px #a44fff;
}
.image-container {
  position: relative;
  width: 100%;
  height: 60%;
  min-height: 120px;
  border-radius: 24px 24px 0 0;
  overflow: hidden;
}
.product-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px 24px 0 0;
}
.card-footer {
  position: absolute; bottom: 0; left: 0; width: 100%;
  padding: 20px; text-align: center; background: transparent; z-index: 1;
}
.card-footer h2 {
  font-size: 1.3rem;
  color: #3ad7ff;
  text-shadow: 0 0 10px #fff, 0 0 25px #3ad7ff;
  transition: all .3s ease;
}
.product-card:hover .card-footer h2 {
  color: #fff; text-shadow: 0 0 12px #fff, 0 0 36px #fff;
}
.card-footer button {
  margin-top: 10px; padding: 10px 18px;
  font-size: 1rem; border-radius: 30px;
  background: transparent; border: 2px solid #3ad7ff; color: #3ad7ff;
  cursor: pointer; transition: all .3s ease;
  min-width: 120px; min-height: 44px;
}
.card-footer button:hover {
  background: linear-gradient(90deg, #6557ff 10%, #3ad7ff 70%, #a44fff 100%);
  color: #fff; border-color: #a44fff;
  box-shadow: 0 0 20px #a44fff, 0 0 18px #3ad7ff;
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 2.5rem;
    padding: 24px 8px 0 8px;
    word-break: break-word;
  }
  .logo {
    width: 180px;
    top: 8px;
  }
  .product-card {
    width: 98vw;
    max-width: 99vw;
    height: 63vw;
    max-height: 420px;
    min-height: 260px;
  }
  .console {
    width: 95vw;
    max-width: 99vw;
    font-size: 0.95rem;
    padding: 10px;
  }
  .background {
    background-size: cover;
    filter: brightness(55%) blur(3px);
  }
}

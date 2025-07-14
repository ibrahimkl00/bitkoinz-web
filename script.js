
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
const fontSize = 16;
let columns, drops, gradient, matrixInterval;
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = Math.floor(canvas.width / fontSize);
  drops = Array(columns).fill(1);
  gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, '#3399FF');
  gradient.addColorStop(0.5, '#66FFFF');
  gradient.addColorStop(1, '#99FFFF');
}
window.addEventListener('resize', resize);
resize();
function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = gradient;
  ctx.font = fontSize + 'px monospace';
  for (let i = 0; i < drops.length; i++) {
    const char = String.fromCharCode(0x30A0 + Math.random() * 96);
    const x = i * fontSize;
    const y = drops[i] * fontSize;
    ctx.fillText(char, x, y);
    if (y > canvas.height && Math.random() > 0.95) drops[i] = 0;
    drops[i]++;
  }
}
matrixInterval = setInterval(drawMatrix, 20);
function startLaunch() {
  canvas.style.transition = 'opacity 0.5s';
  canvas.style.opacity = 0;
  clearInterval(matrixInterval);
  setTimeout(() => {
    const launcher = document.querySelector('.launcher');
    launcher.style.opacity = 1;
    typeLaunch();
  }, 500);
}
function typeLaunch() {
  const text = 'Launching catalogue...';
  const el = document.getElementById('launchText');
  el.textContent = '';
  let i = 0;
  function typeChar() {
    if (i < text.length) {
      el.textContent += text.charAt(i) + '_';
      i++;
      setTimeout(() => {
        el.textContent = el.textContent.slice(0, -1);
        typeChar();
      }, 100);
    } else {
      setTimeout(typeCommands, 200);
    }
  }
  typeChar();
}
function typeCommands() {
  const commands = [
    '> initializing modules...',
    '> verifying integrity...',
    '> loading catalogue.db...'
  ];
  const el = document.getElementById('launchText');
  let idx = 0;
  let cmdIdx = 0;
  function typeCmd() {
    if (cmdIdx < commands.length) {
      const cmd = commands[cmdIdx];
      el.textContent += '\n';
      idx = 0;
      function typeChar() {
        if (idx < cmd.length) {
          el.textContent += cmd.charAt(idx) + '_';
          idx++;
          setTimeout(() => {
            el.textContent = el.textContent.slice(0, -1);
            typeChar();
          }, 30);
        } else {
          cmdIdx++;
          setTimeout(typeCmd, 100);
        }
      }
      typeChar();
    } else {
      setTimeout(() => {
        document.querySelector('.launcher').style.opacity = 0;
        setTimeout(showMainContent, 800);
      }, 500);
    }
  }
  typeCmd();
}
function showMainContent() {
  document.getElementById('matrix').style.display = 'none';
  document.querySelector('.launcher').style.display = 'none';
  document.body.classList.add('snap-scroll');
  document.documentElement.classList.add('snap-scroll');
  const main = document.getElementById('mainContent');
  main.style.display = 'block';
  setTimeout(() => {
    main.style.opacity = 1;
    main.style.pointerEvents = 'auto';
  }, 60);
  setTimeout(startTypewriter, 600);
}
function startTypewriter() {
  const text = "Human, please scroll down to see our products made from AI for humans.\n";
  const el = document.getElementById('typewriter');
  el.textContent = '';
  let i = 0;
  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i) + "_";
      i++;
      setTimeout(() => {
        el.textContent = el.textContent.slice(0, -1);
        type();
      }, 50);
    }
  }
  type();
}
window.onload = () => setTimeout(startLaunch, 2300);

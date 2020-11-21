const demo = document.querySelector(".demo");
const demo1 = document.querySelector(".demo1");
const btnPause = document.querySelector(".btnPause");
const btnPlay = document.querySelector(".btnPlay");
const btnFast = document.querySelector(".btnFast");
const btnSlow = document.querySelector(".btnSlow");
const btnNormal = document.querySelector(".btnNormal");
import string from "./css.js"; //把css.js的内容引用过来

let n = 0;
demo.innerHTML = string.substring(0, n);
demo1.innerText = string.substring(0, n);
const run = () => {
  n += 1;
  if (n > string.length) {
    window.clearInterval(id); //终止计时器
    return;
  }
  demo.innerHTML = string.substring(0, n);
  demo1.innerText = string.substring(0, n);
  demo1.scrollTop = demo1.scrollHeight; //根据整体的高度，滚动显示
};

let id = setInterval(() => {
  run();
}, 50);

btnPause.onclick = () => {
  window.clearInterval(id);
};

btnPlay.onclick = () => {
  id = setInterval(run, 50); //这是最简化的run，原先是() => {run()},
};
btnSlow.onclick = () => {
  window.clearInterval(id);
  id = setInterval(run, 100);
};
btnFast.onclick = () => {
  window.clearInterval(id);
  id = setInterval(run, 0);
};
btnNormal.onclick = () => {
  window.clearInterval(id);
  id = setInterval(run, 30);
};

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const button = document.querySelector("button");

// origin 값 정의해주기.. 객체타입으로
const origin = {
  x:window.innerWidth/2,
  y:window.innerHeight/2
}
const alpha = 0.7;
// 투명도 정의해주기!

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


ctx.fillStyle = "#ccc"
ctx.fillRect(origin.x, origin.y, 100, 100);


button.onclick = function rotateCtx() {
  let color = randomRGB();
  ctx.globalAlpha = alpha; // 투명도 불러오기!
  ctx.translate(origin.x, origin.y);
  // rotate 쓸땐 (Math.PI / 180) * 회전하고싶은 숫자 입력!
  ctx.rotate((Math.PI / 180)* 30);
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 100, 100);
  ctx.translate(-origin.x, -origin.y);
}

function randomRGB() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}
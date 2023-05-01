const canvas = document.querySelector("canvas");
const toolbar = document.querySelector("#toolbar");
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

let isDrawing = false;
let lineWidth = 2;

// 클릭한 상태에서 이벤트
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
})

// 마우스가 움직일 때 이벤트
canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;
  ctx.lineWidth = lineWidth;
  // ctx.lineCap = "round";
  ctx.lineTo(e.pageX - canvasOffsetX, e.pageY - canvas.offsetTop);
  ctx.stroke();
})

// 마우스에서 뗐을때 이벤트
canvas.addEventListener("mouseup", (e) => {
  isDrawing = false;
  ctx.beginPath();
})

// 툴바 설정하기
toolbar.addEventListener("change", (e) => {
  if(e.target.id === "stroke") {
    ctx.strokeStyle = e.target.value;
  }
  if (e.target.id === "lWidth") {
    lineWidth = e.target.value;
  }
})

// 지우개 만들기
toolbar.addEventListener("click", (e) => {
  if (e.target.id === "reset") {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
})
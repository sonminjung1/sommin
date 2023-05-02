const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ==================================

// 중첩된 (겹쳐진) 도형 중에 깔려있는 걸  destination이라고한다
// ctx.fillStyle = "#ccc";
// ctx.fillRect(100, 50, 100, 100);

// ctx.globalCompositeOperation = "xor"
// // 중첩된 (겹쳐진) 도형 중에 위에 있는걸 source라고한다
// ctx.fillStyle = "#222"
// ctx.beginPath();
// ctx.arc(180, 120, 50, 0, Math.PI * 2, false);
// ctx.fill();

// .globalCompositeOperation 타입 종류!
// ★ source ★
// 1) source-over : source로 시작하는 그래픽 요소를 destination
// 요소 위쪽에 배치시킴 > 그냥 디폴트값임 어짜피 소스는 맨밑에 있는거니깐

// 2) source-in : source를 그리면서 destination 요소와
// 겹쳐지는 부분만 나오게! 그리고 나머지는 투명하게 처리 > 교집합 부분만

// 3) source-out : source를 그리면서 destination 요소와
// 겹쳐지지 않는 부분만 나오게합니다 > 소스에서 겹쳐지지 않는 부분만!

// 4) source-atop : source를 그리면서 destination 요소와
// 겹쳐지는 부분을 그리고, 그외 destination은 불투명하게 처리

// ★ destination ★
// 1) destination-over : destination로 시작하는 그래픽 요소를 source
// 요소 위쪽에 배치시킴 > 그냥 디폴트값임 어짜피 소스는 맨밑에 있는거니깐

// 2) destination-in : destination를 그리면서 source 요소와
// 겹쳐지는 부분만 나오게! 그리고 나머지는 투명하게 처리 > 교집합 부분만

// 3) destination-out : destination를 그리면서 source 요소와
// 겹쳐지지 않는 부분만 나오게합니다 > 소스에서 겹쳐지지 않는 부분만!

// 4) destination-atop : destination를 그리면서 source 요소와
// 겹쳐지는 부분을 그리고, 그외 source은 불투명하게 처리

// ==================================

// 복습 차원으로 실습 해보자 ★
// 글자에 꽃 이미지 클리핑마스크 넣어보긔

// ctx.beginPath();
// ctx.font = "bold 200px sans-serif"
// ctx.fillText("GOOD", 30, 320);

// ctx.globalCompositeOperation = "source-atop"

// ctx.beginPath();
// let img = new Image();
// img.onload = function() {
//   ctx.drawImage(img, 0, 0, 800, 500);
// }
// img.src = "/img/flower.jpg"

// ================== ★ 본격적인 에니메이션 실습 1 ★ ================

// function Circle(x, y, radius, color) {
//   this.x = x;
//   this.y = y;
//   this.radous = radius;
//   this.color = color;

//   this.draw = function() {
//     ctx.beginPath();
//     ctx.fillStyle = this.color
//     ctx.arc(this.x, this.y, this.radous, 0, Math.PI * 2, false);
//     ctx.fill();
//   }
// }

// const objs = [];
// for (let i = 0; i < 20; i++) {
//   const radius = Math.floor((Math.random() * 50)) + 10;
//   const x = Math.random() * (canvas.width - radius * 2) + radius;
//   const y = Math.random() * (canvas.height - radius * 2) + radius;
//   const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
//   objs.push(new Circle(x, y, radius, color)); //push가 뭐였지 ..
// }

// for (let i = 0; i < objs.length; i++) {
//   objs[i].draw();
// }

// =========== ★ 본격적인 에니메이션 실습 2 (에니메이션!) ★ =========
// const circle = {
//   x : 100,
//   y : 100,
//   radius : 30,
//   dx : 10, // x좌표로부터 4px씩 움직여라
//   dy : 7, // y좌표로부터 4px씩 움직여라
//   color : "#222"
// }
// function drawCircle() {

//   ctx.fillStyle = circle.color;
//   ctx.beginPath();
//   ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
//   ctx.fill();
// }
// function move() {
//   ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawCircle();

//   circle.x += circle.dx;
//   circle.y += circle.dy;
//   if(circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
//     circle.dx = -circle.dx;
//   }

//   if(circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
//     circle.dy = -circle.dy;
//   }
//   // 에니메이션 메서드이다!
//   requestAnimationFrame(move);
// }
// move();

// ==========본격적으로 원 튕기는거 맨들기 ================
function circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  this.dx = Math.floor(Math.random() * 4) + 1;
  this.dy = Math.floor(Math.random() * 4) + 1;

  this.draw = function() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
  }
  this.animate = function() {
    this.x += this.dx;
    this.y += this.dy;

    if(this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if(this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.draw();
  }
}

const objs = [];
for(let i = 0; i < 20; i++) {
  const radius = Math.floor((Math.random() * 50)) + 10;
  const x = Math.random() * (canvas.width - radius * 2) + radius;
  const y = Math.random() * (canvas.height - radius * 2) + radius;
  const color = `
  rgb(${Math.random() * 255},
  ${Math.random() * 255},
  ${Math.random() * 255})
  `; // 색상 랜덤값
  objs.push(new circle(x, y, radius, color)); // push로 내장객체에 추가하기
}

function update() {
  ctx.clearRect(0, 0 ,canvas.width, canvas.height); // 리셋시키기!
  for(let i = 0; i < objs.length; i++) {
    let obj = objs[i];
    obj.animate()
  }
  requestAnimationFrame(update);
}
update();
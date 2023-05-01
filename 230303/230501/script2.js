const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ==================================

ctx.fillStyle = "#ccc";
ctx.fillRect(50, 50, 100, 50);

// save & restore은 여기 사이에 있는 애들만 스타일 먹겠다는 뜻!
ctx.save();
ctx.scale(3, 2);
ctx.strokeRect(20, 70, 100, 50);
ctx.restore()

ctx.strokeRect(200, 50, 100, 50);


// ==================================

// rotate 메서드 사용해보기
// ctx.fillStyle = "#ccc"
// ctx.fillRect(150, 150, 100, 100);

// ctx.translate(150, 150);
// ctx.rotate((Math.PI / 180) * 45);
// ctx.strokeRect(0, 0, 100, 100);
// ctx.translate(-150, -150);

// ctx.fillStyle = "#ccc"
// ctx.fillRect(150, 150, 100, 100);

// ==================================

// translate 사용해보기! 위치 자체를 옮기기

// ctx.fillStyle = "#ccc";
// ctx.fillRect(10, 10, 100, 100);

// ctx.save();
// ctx.translate(150, 150);
// ctx.fillStyle = "#222";
// ctx.fillRect(10, 10, 100, 100);
// // save와 restore은 쌍둥이처럼 움직인다!
// // 해당 구간을 저장할 때,, 마지막엔 restore로 마무리해준다.
// ctx.fillStyle = "red";
// ctx.fillRect(50, 50, 80, 20);
// ctx.restore(); //복구하라는 뜻 


// ctx.fillStyle = "#f5f";
// ctx.fillRect(30, 100, 100, 100);

// ==================================

// ctx.globalAlpha = 0.3;
// globalAlpha > 0에 가까울수록 투명해짐!
// ctx.fillStyle = "rgb(255, 0, 0, 0.2)"
// ctx.fillRect(50, 50, 100, 50);

// ctx.fillStyle = "rgb(0, 0, 255, 0.4)"
// ctx.fillRect(150, 50, 100, 50);

// ctx.fillStyle = "rgb(0,255, 0, 0.8)"
// ctx.fillRect(250, 50, 100, 50);

// ctx.fillStyle = "rgb(255, 255, 0, 1)"
// ctx.fillRect(350, 50, 100, 50);

// fillStyle에서 마지막 숫자는 투명도를 조절할 수 있다!
// 1이 제일 투명도가 없는 것

// ================ 그라데이션 ================ 
// 복수의 컬러를 은은하게 사용하고자 할 때 사용하는 스타일 기법

// 1. 선형 그라데이션
// > createLinearGradient(x1, y1, x2, y2);
// - 색 중지점 할당 메서드 > addColorStop(position, color); 정의 필요!
// let linGrad = ctx.createLinearGradient(0, 0, 0, 200);
// linGrad.addColorStop(0, "#000");
// linGrad.addColorStop(0.6, "#fff");
// linGrad.addColorStop(1, "#eee");

// ctx.fillStyle = linGrad;
// ctx.fillRect(0, 0, 100, 200);

// 2. 원형 그라데이션
// > createRadialGradient(x1, y1, r1, x2, y2, r2);

// let radGrad = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);
// radGrad.addColorStop(0, "white")
// radGrad.addColorStop(0.4, "yellow")
// radGrad.addColorStop(1, "orange")

// ctx.fillStyle = radGrad;
// ctx.beginPath();
// ctx.arc(100, 100, 80, 0, Math.PI * 2, false); // 반원이면 true로 설정!> 반시계반향으로
// ctx.fill();

// 3. 패턴 채우기
// : createPattern(Image, type);

// let img = new Image();
// img.onload = function() {
//   let pattern = ctx.createPattern(img, "repeat");
//   ctx.fillStyle = pattern;
// ctx.fillRect(0, 0, 200, 200);
// }
// img.src = "/img/pattern.png"

// 4. 그림자 효과 추가하기!
// - shadowOffsetX = x축으로부터 그림자가 얼마나 떨어져있는가
// - shadowOffsetY = y축으로부터 그림자가 얼마나 떨어져있는가
// - shadowBlur = 그림자의 밝기 여부
// - shadowClor = 그림자 색상 

// let radGrad = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);
// radGrad.addColorStop(0, "white");
// radGrad.addColorStop(0.4, "yellow");
// radGrad.addColorStop(1, "orange");
// ctx.fillStyle = radGrad;

// ctx.shadowColor = "#ccc";
// ctx.shadowOffsetX = 15;
// ctx.shadowOffsetY = 20;
// ctx.shadowBlur = 10;

// ctx.arc(100,100, 80, 0, Math.PI * 2, false);
// ctx.fill();

// 5. 텍스트 선 관련 스타일 속성 : 
// - 선 굵기 속성 : ctx.lineWidth = 값
// - 선의 끝 모양 : ctx.lineCap = butt || round  || square (*선 양쪽 끝에 높이가 선 너비의 1/2인 사각형을 추가!)
// - 선 교차 스타일 : lineJoin = bevel || miter || round 



// const lineCap = ["butt", "round", "square"];

// ctx.strokeStyle = "#222"

// for문 활용해서 캡 씌우고 3개 연속 만들기
// for (let i = 0; i < lineCap.length; i++) {
//   ctx.lineWidth = 15;
//   ctx.lineCap = lineCap[i];
//   ctx.beginPath();
//   ctx.moveTo(50, 50 + i * 30);
//   ctx.lineTo(350, 50 + i * 30);
//   ctx.stroke(); // 이게 있어야 선이 그려짐..!
// }

// ==================================
// 선 교차 스타일 예습 !!!!! 

// const lineJoin = ["bevel", "miter", "round"];


// for (let i = 0; i < lineJoin.length; i++) {

//   ctx.lineWidth = 20;
//   ctx.lineJoin = lineJoin[i];
//   ctx.beginPath()
//   ctx.moveTo(60, 60 * i + 50);
//   ctx.lineTo(100, 60 * i + 15);
//   ctx.lineTo(140, 60 * i + 50);
//   ctx.stroke();
// }

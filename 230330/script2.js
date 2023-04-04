// let num= 2.1234;

// let
// maxNum = Math.max(10, 5 , 8, 30);
// minNum = Math.min(10, 5 , 8, 30);
// roundNum = Math.round(num);
// floorNum = Math.floor(num);
// ceilNum = Math.ceil(num);
// rndNum = Math.random(); // 1이하의 난수를 랜덤으로 불러온다
// piNum = Math.PI; 

// document.write(maxNum, "<br>");
// document.write(minNum, "<br>");
// document.write(roundNum, "<br>");
// document.write(floorNum, "<br>");
// document.write(ceilNum, "<br>");
// document.write(rndNum, "<br>");
// document.write(piNum, "<br>");
// document.write(maxNum, "<br>");



// 120~150 사이의 ★★★난수를 > 정수로만! 계산법
// Math.floor(Math.random()*(최대값 + 최소값 + 1)) + 최소값

// Math.floor(Math.random()*(150 - 120 + 1)) + 

// let num = Math.floor(Math.random()*30)+120

// console.log(num);


// ★★ 스위치문으로 가위바위보 게임 만들기 ★★
document.write("<h1>컴퓨터 가위 바위 보 맞추기 게임</h1>")

let game = prompt("가위, 바위, 보 중 선택하세요!", "예시 : 가위")
let gameNum;

switch(game) {
  case "가위" :
  gameNum = 1; break;
  case "바위" :
  gameNum = 2; break;
  case "보" :
  gameNum = 3; break;
  default:alert("잘못 입력하셨습니다.")
  location.reload();
}

let com = Math.ceil(Math.random()*3)
document.write("<img src=\"/images/math_img_"+ com +".jpg\">");

if(gameNum == com) {
  document.write("<img src=\"/images/game_1.jpg\">");
} else {
  document.write("<img src=\"/images/game_2.jpg\">");
}
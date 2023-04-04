// 1
//일반 함수
// let count = 0;
// myFnc();
// function myFnc() {
//   count++;
//   document.write("hello"+count,"<br>")
// }
// myFnc();

// //익명함수
// let theFnc = function() {
//   count++;
//   document.write("bye" + count,"<br>")
// }
// theFnc();

//일반함수와 익명함수의 차이점
//일반함수는 호출을 함수 위에 올려놓아도 호출이 되는데, 익명은 아예 안나옴 즉 익명함수는 호출/함수 위치 잘 놓아야한다.


//배경 색깔 바꾸기
// let color = ["white","yellow","aqua","purple"];

// let i = 0;
// function changeColor() {
//   i++;
//   if(i >= color.length) {
//     i = 0;
//   }
//   let bodyTag = document.getElementById("theBody");
//   bodyTag.style.backgroundColor = color[i];
// }



//
// function addNum(){
//   let sum = 10 + 20;
//   document.write(sum);
// }

// addNum();


// function addNum(a, b 매개변수) {
//   let sum = a + b;
//   document.write(sum);
// }

// addNum(인자값 넣어주기);

//3
//매개변수와 인자값 사용하기
// let a = Number(prompt("첫번째 값을 넣어보세요","ex) 3"))
// let b = Number(prompt("두4번째 값을 넣어보세요","ex) 3"))
// addNum(a, b);

// function addNum(a, b) {
//   let sum = a + b;
//   document.write(sum,"<br>");
// }

//4
// let text_1 = prompt("이름을 말씀 해 주세요","");
// let text_2 = prompt("사는곳을 말씀 해 주세요","");

// function myFnc(name, area) {
//   document.write(`안녕하세요 ㅋ${name}입니다!`,"<br>")
//   document.write(`사는곳은 ${area}입니다!`)
// }
// myFnc(text_1, text_2);

//5 => 중첩 if문
// let rightId = "korea";
// let rightPw = 1234;

// function login(id, pW) {
//   if(id == rightId) {
//     if(pw == rightPw) {
//       document.write(`${id}님 방문을 환영합니다.`);
//     } else {
//       alert("잘못된 비밀번호 입니다.")
//     }
//   } else {
//     alert("존재하지 않는 아이디입니다.")
//   }
// }

// let userId = prompt("아이디를 입력하세요")
// let userPw = prompt("비밀번호를 입력하세요")

// login(userId, userPw)

//6
// function sum() {
//   let sum = 0;
//   for(let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
// }

// sum(10, 20, 30);

//7
// return : 함수문 안에서 return이 실행 된다면, 반복문 break문과 동일하게 코드를 강제로 종료

// 정의문에서 return이 실행된다면, 함수를 호출했을 때의 결과값을 반환!

// let num1 = parseInt(prompt("첫번째 숫자는?",""));
// let num2 = parseInt(prompt("첫번째 숫자는?",""));
// let result = addNum(num1, num2);
// alert("두 수를 더한 값은" + result + "입니다.");

// function addNum(a, b) {
//   return a + b;
// }

// function testAvg(e) {
//   let sum = 0;
//   for(let i = 0; i < e.length; i++) {
//     sum += parseInt(prompt(e[i] + "점수는?","0"));
//   }
//   let avg = sum / e.length;
//   return avg;
// }

// let arrSubject = ["국어","수학"];
// let result = testAvg(arrSubject);

// document.write(`평균 점수는 ${result}점 입니다.`)

//7 return(2)
// let num = 1;
// function gallery(event) {
//   if(event) {
//     if(num == 9) return;
//     num++;
//   } else {
//     if(num == 1) return;
//     num--;
//   }
//   let imgTag = document.getElementById("photo");
//   imgTag.setAttribute("src","/imgfile/pic_" + num + ".jpg");
// }

//9 재귀함수
// let num = 0;
// function testFnc() {
//   num++;
//   document.write(num,"<br>");
//   if(num == 10) return;

//   testFnc();
// }

// testFnc();

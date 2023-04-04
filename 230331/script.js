// 문자열 객체 생성 방법

// let 참조변수 = new String("문자형데이터");

// let t1 = new String("hello")

// let t = "Hello Thank you good luck to you";

// document.write(t.charAt(16),"<br>");
// document.write(t.indexOf("you"),"<br>");
// document.write(t.indexOf("you",16),"<br>");
// document.write(t.lastIndexOf("you"),"<br>");
// document.write(t.lastIndexOf("you",25),"<br>");
// document.write(t.match("luck"),"<br>");
// document.write(t.search("you"),"<br>");
// document.write(t.substr(21,4),"<br>");
// document.write(t.substring(6, 12),"<br>"); // -> 6번째부터 12번 이전까지 데려오라는 뜻
// document.write(t.replace("you", "me"),"<br>"); // 살짝 이해 안됌
// document.write(t.toLowerCase("you"),"<br>");
// document.write(t.toUpperCase("you"),"<br>");
// document.write(t.length ,"<br>");

// let s = t.split(" "); // 띄어쓰기 기준으로 숫자를 입력해서 불러오는 것
// document.write(s[0], "<br>")
// document.write(s[1], "<br>")
// document.write(s[2], "<br>")
// document.write(s[3], "<br>")
// document.write(s[4], "<br>")
// document.write(s[5], "<br>")
// document.write(s[6], "<br>")

// let str = "A";
// let k = str.charCodeAt(0);
// document.write(k, "<br>");
// document.write(String.fromCharcode(65));



//★★ 영문 대문자로 바꾸기
// let userName = prompt("당신의 영문 이름은?");
// let upperName = userName.toUpperCase();
// document.write(upperName, "<br>")


//★★ 전화번호 뒷자리 ****로 가리는 방법
// let userNum = prompt("당신의 연락처는?","")
// let result = userNum.substring(0, userNum.length-4) + "****";
// document.write(result)


// ★★ 이메일 주소 물어보기
// let userEmail = prompt("당신의 이메일 주소는?","");
// let arrUrl = [".co.kr", ".com", ".net", ".or.kr", ".go.kr"];

// let check1 = false;
// let check2 = false;

// if(userEmail.indexOf("@") > 0) {
//   check1 = true;
// }
// for(let i = 0; i < arrUrl.length; i++) {
//   if(userEmail.indexOf(arrUrl[i] > 0)) {
//     check2 = true;
//   }
// }

// if(check1 && check2) {
//   document.write(userEmail);
// } else {
//   alert("이메일 형식이 잘못 되었습니다.")
// }


// window.open("htps://www.naver.com", "naver", "width=1920, height=1080, left=50, top=10, scrollbars=no");


//★★ 위치값 찾아와서 팝업창 띄우기
// window.open("/index2.html", "popup","width=350, height=500, left50, top=10")



// setInterval() : 일정한 시간 간격으로 코드를 반복해서 실행하는 메서드 함수
// clearInterval() : setInterval()메서드를 취소할 때 사용하는 메서드 함수


// setTimeout() : 일정한 시간 후에 코드를 실행하고 종료하는 메서드
// clearTimeout() : setTimeout()메서드를 제거하는 메서드

// let addNum = 0;
// let subNum = 1000;

// let auto_1 = setInterval(function() {
//   addNum++;
//   console.log("addNum : " + addNum);
// }, 3000);

// let auto_2 = setInterval(function() {
//   console.log("subNum", subNum);
// }, 3000);


// ★★ 디지털 시계 만들기
const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
// > 전역변수 (* global Variable)

function clock() {
  const now = new Date(); // 지역변수 (*local Variable)

  hour.innerText = now.getHours()+"시";
  min.innerText = now.getMinutes()+"분";
  sec.innerText = now.getSeconds()+"초";
}

setInterval(clock, 1000);

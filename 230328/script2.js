
//조건문!!
// let walkAmout = prompt("당신의 오늘 하루 걷는 양은 몇보인가요?")

// if(walkAmout >=10000) {
//   document.write ("매우 좋은 습관을 지니고 계시는군요!", "<br>")
// }
// document.write("----end-----");

//if else 사용법
// let num = prompt ("당신이 좋아하는 숫자는?")
// if (num % 2 == 0) {
//   document.write ("당신이 좋아하는 숫자는 짝수입니다.");
// } else {
//   document.write ("당신이 좋아하는 숫자는 홀수입니다.")
// }


// let result = confirm ("정말로 탈퇴 하시겠습니까?");
// // 확인은 true 취소는 false
// if(result) {
//   document.write ("탈퇴 처리 되었습니다.")
// } else {
//   document.write ("감사합니다 :-)")
// }


//★★★ else if문 !!!!! 
// let month = prompt ("현재는 몇월입니까?")

// if (month >= 9 && month <= 11) {
//   document.write ("독서의 계절 가을이네요");
// } else if (month >=6 && month <= 8) {
//   document.write ("휴가가기 좋은 여름이네요");
// } else if (month >=3 && month<=5) {
//   document.write ("햇살 가득한 봄이네요");
// } else {
//   document.write ("추운 겨울이네요 스키의 계절입니다 스키장 놀러가세요 :)");
// }


// 아이디 비밀번호 설정 ★ if 중첩문 ★ 
// let id = "abc";
// let pw = "1234";

// let user_id = prompt ("당신의 아이디는?")

// if(id == user_id) {
//   let user_pw = prompt ("당신의 비밀번호는?");
//   if(pw == user_pw) {
//     document.write(`${user_id}님 반갑습니다!`);
//   } else {
//     alert("비밀번호가 일치하지 않습니다.")
//   }
// } else {
//   alert ("아이디가 일치하지 않습니다!");
//   location.reload();
// }


// ★ 스위치문 ★
// let site = prompt ("네이버, 다음 , 구글, 네이트 중 즐겨 사용하는 포털 사이트는?","");
// let url;

// switch(site) {
//   case "구글" : url ="https://www.google.com";
//   break;
//   case "다음" : url ="https://www.daum.net";
//   break;
//   case "네이버" : url ="https://www.naver.com";
//   break;
//   case "네이트" : url ="https://www.nate.com";
//   default : alert ("보기중에 없는 사이트입니다.")
// }
// if(url) {
//   location.href = url;
// }
// let i = 1;
// while(i <= 10) {
//   document.write(`안녕하세요 ${i}"<br>"`)
//   i++;
// }
// document.write("=== the end ===")

// let i = 1;
// while(i <= 30) {
//   if(i % 2 == 0 && i % 6 ==0) {
//     document.write(i ,"<br>");
//   } i++
// }


//★ 할인율 계산기 만들기 ★
// function showPrice() {
//   let originPrice = document.querySelector('#oPrice').value;
//   let rate = document.querySelector('#rate').value;
//   let savePrice = originPrice * (rate/100);
//   let resultPrice = originPrice - savePrice;

//   document.querySelector('#showResult').innerHTML = "상품의 원래 가격은" + originPrice + "원 이고, 할인율은" + rate + "% 입니다." + savePrice + "원을 절약한" + resultPrice + "원에 구매할 수 있습니다.";
// }

//★ for 반복문 ★
// for(let i = 1; i <= 10; i++) {
//   document.write("반복" + i, "<br>");
// }


// ★ 구구단 만들기 ★
// let i = 1;
// const k = 5

// while(i <= 9) {
//   document.write("5 x" + i + "=" + i*k, "<br>");
//   i++;
// }

//★ 중첩 for 반복문 ★
// for(let i = 1; i <= 5; i++) {
//   for(b= 1; b <=9; b++) {
//     document.write(i+"x" + b + "=" + (i*b));
//     document.write("<br>");
//   }
// }

// ★ 테이블 만들기 ★
// let num = 1;
// let t = "<table border='1'>";
// for(let i = 1; i <= 5; i++) {
//   t+="<tr>";
//   for(let k = 1; k <= 5; k++) {
//     t+="<td>" + k "</td>"
//   }
//   t+"</tr>"
// }
// t += "</table>";
// document.write(t);

// ★ 객체 속성 ★

let tv = new Object();
tv.color = "white";
tv.price = 30000;
tv.info = function() {
  document.write("tv 색상:" + this.color, "<br>")
  document.write("tv 가격:" + this.price, "<br>")
}

let car = {
  color:"black",
  price:6000,
  info: function() {
    document.write("car 색상:" + this.color, "<br>");
    document.write("car 가격 :" + this.price, "<br>")
  }
}

document.write("<h1> tv 객체 메서드 호출</h1>")
tv.info();
document.write("<h1> car 객체 메서드 호출</h1>")
car.info();
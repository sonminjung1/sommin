// let 참조변수 = new Date()
// => Date 객체 생성 방법!! 

//★ 날짜 정보 불러오기 ★
// let today = new Date();
// let nowMonth = today.getMonth()+1,
// nowDate = today.getDate(),
// nowDay = today.getDay();

// document.write("<h1>오늘 날짜 정보</h1>");
// document.write(`현재 월 : ${nowMonth}`, "<br>");
// document.write(`현재 일 : ${nowDate}`, "<br>");
// document.write(`현재 요일 : ${nowDay}`, "<br>");

// let classOpen = new Date("2023/2/28");
// let theMonth = classOpen.getMonth() +1,
// theDate = classOpen.getDate(),
// theDay = classOpen.getDay();

// document.write("<h1>개강일 날짜 정보</h1>");
// document.write(`개강일 몇 월 : ${nowMonth}`, "<br>");
// document.write(`개강일 몇 일 : ${nowDate}`, "<br>");
// document.write(`개강일 무슨 요일 : ${nowDay}`, "<br>");

// ★ 오늘 날짜 기준으로 연말까지 디데이 계산하기 ★
// let today = new Date();
// let nowYear = today.getFullYear();

// let theDate = new Date(nowYear,11,31);
// let diffDate = theDate.getTime() - today.getTime();

// let result = Math.ceil(diffDate / (60 * 60 * 24 * 1000));

// document.write(`연말 D-day${result}일 남았습니다 ^^,,,,ㅋ`)




// D-day ★
let now = new Date();
let firstDay = new Date("2018/02/06");

let toNow = now.getTime();
let toFirst = firstDay.getTime();

let passedTime = toNow - toFirst;
let passedDay = Math.ceil(passedTime/(60 * 60 * 24 * 1000));
document.querySelector('#accent').innerText = passedDay + "일"

console.log(passedDay)

// D-day Function ★
function calcDate(days) {
  let future = toFirst + days*(24*60*60*1000);
  let someday = new Date(future);
  let year = someday.getFullYear();
  let month = someday.getMonth();
  let date = someday.getDate();
  
  document.querySelector("#data"+days).innerText = year + "년" + month + "월" + date + "일"
  
  console.log(date)
}

//이건 호출문
calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);



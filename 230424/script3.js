// // 1. 이벤트 발생 버튼에 대한 정의
// // 2. 입력값에 대한 저장공간 및 정의
// // 3. 출력 공간에 대한 정의
// // 4. 출력할 내용에 대한 연산식 정의


const endbtn = document.querySelector("#btn");
let endYear = document.querySelector("#year");
let endMonth = document.querySelector("#month");
let endDate = document.querySelector("#date");

const current = document.querySelector("#current");
const resultDays = document.querySelector("#days");
const resultHour = document.querySelector("#hours");

const today = new Date();
current.innerHTML = `${today.getFullYear()}년 ${today.getMonth()+1}월 ${today.getDate()}일 ${today.getHours()}시 ${today.getMinutes()}분 현재시간`

btn.addEventListener("click", function(e) {
  e.preventDefault();
  const endDay = new Date (endYear.value, endMonth.value-1, endDate.value)


//  // Math.floor 함수를 이용해서 근접한 정수값을 가져온다.
//  // 밀리초 값이기 때문에 1000을 곱한다. 
  let passed = endDay.getTime() - today.getTime();
  let passedDays= Math.floor(passed / (1000 * 60 * 60 * 24));
  // 지나온 시간을 날짜로 나타내는 계산
  let passedHours = Math.floor(passed / (1000 * 60 * 60));
  // 지나온 시간을 시간으로 계산

//   //시간 계산법!!!!!!!!
  // const diffDay = Math.floor(diff / (1000*60*60*24)); // 날짜 계산
  // const diffHour = Math.floor((diff / (1000*60*60)) % 24); // 시간 계산
  // const diffMin = Math.floor((diff / (1000*60)) % 60); // 분 계산
  // const diffSec = Math.floor(diff / 1000 % 60); // 초 계산

  resultDays.innerHTML = (`날짜로는 ${passedDays}일이 남았고,`)
  resultHour.innerHTML = (`날짜로는 ${passedHours}시간이 남았습니다.`)
});


// 크리스마스 남은 날 까지 디데이 계산기
// const remainTime = document.querySelector("#remain-time");

// function diffDay() {
//     const masTime = new Date("2023-12-25");
//     const todayTime = new Date();
    
//     const diff = masTime - todayTime;
    
//     const diffDay = Math.floor(diff / (1000*60*60*24));
//     const diffHour = Math.floor((diff / (1000*60*60)) % 24);
//     const diffMin = Math.floor((diff / (1000*60)) % 60);
//     const diffSec = Math.floor(diff / 1000 % 60);
    
//     remainTime.innerText = `${diffDay}일 ${diffHour}시간 ${diffMin}분 ${diffSec}초`;
// }

// diffDay();
// setInterval(diffDay, 1000);
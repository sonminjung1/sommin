// *이터레이터 객체 & 제너레이터

// 1. 문자열, 배열, Map, Set :
// 이터러블 객체 (iterable)
// > 이터러블 : 순서대로 처리할 수 있는 것

// 이터레이터 객체를 프로토타입으로 상속을 받아야지만 이터러블 객체가 될 수 있다 !

// 이터러블 객체 = 문자열, 배열 처음 실행했을때에는 인덱스 첫번째 값을 호출하고, next()메서드를 실행하면 다음 인덱스 값을 호출한다!

// 어떤값을 호출할 때 한번에 값을 호출하지않고 순차적으로 호출하고싶을 때 next()함수를 활용한다.

// 생성자 함수 => 동일한 프로퍼티 혹은 객체를 다수 생성하고자 할 때 템플릿을 만들어놓고 해당 템플릿을 통해서 효율적으로 객체를 만들고싶기 때문에!



// 제너레이터 함수를 왜 사용하나요?
// 이터러블 함수를 더욱 효율적으로 사용하기 위해!
// 제너레이더 함수 사용법
// function* 함수명() {
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
// }

// ★★ 제너레이터 함수 예제 ★★
// 경강선 노선 만들어보기!!!!

// const button = document.querySelector("button");
// const result = document.querySelector("#result");

// function* train() {
//   yield "판교";
//   yield "이매";
//   yield "상동";
//   yield "경기광주";
//   yield "초월";
//   yield "곤지암";
//   yield "신둔도예촌";
//   yield "이천";
//   yield "부발";
//   yield "세종대왕릉";
//   yield "여주";
// }

// const gyeonggang = train();

// button.addEventListener("click", function() {
//   //result.innerText = 경광 변수값, 로테이션
  
//   let current = gyeonggang.next();
//   if(current.done! == true) {
//     result.innerHTML = current.value
//   } else {
//     result.innerHTML = "종점!";
//     button.setAttribute("disabled", "disabled")
//   }
// })



// 또 다른 방법!!
// 제너레이터 함수를 정의합니다.
// function* wordGenerator() {
//   yield "사과";
//   yield "바나나";
//   yield "딸기";
//   yield "오렌지";
// }

// // 제너레이터 객체를 생성합니다.
// const generator = wordGenerator();

// // 버튼을 클릭할 때마다 제너레이터에서 단어를 하나씩 꺼내서 출력합니다.
// const btn = document.querySelector("button")
// const result = document.getElementById("result");
// btn.addEventListener("click", () => {
//   const {value, done} = generator.next();
//   if (!done) {
//     result.innerHTML = value
//   } else {
//     result.textContent = "더 이상 단어가 없습니다.";
//   }
// });

// =====================로또 번호 생성기==================
const button = document.querySelector("button");
const result = document.querySelector("#result");

const luckyNumber = {
  digitCount : 6,
  maxNumer : 45
};


button.addEventListener("click", function() {
  let {digitCount, maxNumer} = luckyNumber;

  let myNumber = new Set();
  for(let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumer) +1);
  }
  result.innerHTML = `${[...myNumber]}`; //전개연산자로 복제
});



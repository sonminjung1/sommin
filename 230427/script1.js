// function displayA() {
//   console.log("A");
// }
// function displayB() {
//   setTimeout(()=> console.log("B"),2000);
// }
// function displayC() {
//   console.log("C");
// }
// displayA();
// displayB();
// displayC();

// 싱글"스레드" = "실"
// 스레드 : 프로그램에서 어떠한 프로세스를 실행하는 단위를 가르킨다
// > 하나의 프로세스를 실행한다면 단일 혹은 싱글스레드
// > 한번에 여러개의 프로세스를 실행한다면 멀티스레드

// 자바스크립트는 태생적으로 싱글스레드이다.
// 동기처리방식 지원 프로그램 언어!
// > 콜백함수는 그런 자바스크립트를 보완하기 위해서 멀티스레드를 할 수 있도록 해준다!!!

// function displayA() {
//   console.log("A");
// }
// function displayB(callback) {
//   setTimeout(function() {
//     console.log("B");
//     callback();
//   }, 2000)
// }
// function displayC() {
//   console.log("C");
// }
// displayA();
// displayB(displayC);
// // 콘콜창에 B가 나오는 동시에 C를 출력할 수 있게 만들기!


// function order(coffee) {
//   console.log(`${coffee} 주문 접수되었습니다.`)
// }

// function display(drink) {
//   console.log(`${drink} 준비 완료되었습니다.`)
// }

// order("아메리카노"); // 인자값을 넣어야함!
// display("카페라떼")

// 위에껄 더 간략하게 짜보자 주문접수와 준비완료를 한번에!
// ★ 비동기 처리방식 > 멀티스레드 ★

// function order(coffee, callback) {
//   console.log(`${coffee} 주문 접수되었습니다.`)
//   setTimeout(function() {
//     callback(coffee)
//   }, 3000);
// }

// function display(drink) {
//   console.log(`${drink} 준비 완료되었습니다.`)
// }
// order("아메리카노", display); // 인자값을 넣어야함!

// ============================================
// ★ 또 다른 콜백함수 > 이건 콜백지옥.. ★
// 문제점 중간에 오류가나면 모두 안되기때문에..!
// function displayLetter() {
//   console.log("A");
//   setTimeout(function () {
//     console.log("B");
//     setTimeout(function() {
//       console.log("C");
//       setTimeout(function() {
//         console.log("D");
//       })
//     })
//   })
// }
// displayLetter();

// ============================================
// ★ 프로미스 객체 ★
// Promise : 무분별한 콜백함수 사용의 부작용을 최소화하기 위해서 만든 객체이다
// 프로미스 객체 => 매개변수 : 조건값이 true일때 실행할 함수 & 조건값이 false일때 실행할 함수

// let likePizza = false;
// const pizza = new Promise((resolve, reject) => {
//   if (likePizza) {
//     resolve("피자를 주문합니다.")
//   } else {
//     reject ("피자를 주문하지 않았습니다.")
//   }
// });

// // pizza는 인스턴스 객체임
// pizza
//   .then (
//     result => console.log(result)
//   )
//   .catch (
//     err => console.log(err)
//   )
//   .finally (
//     () => console.log("완료!")
//   )

// promise의 객체 진행 단계 (3가지)

// 1. pending : promise 객체를 만들고 대기중인 상태

// 2. fufilled : promise 객체를 활용해서 true값에 도착한 상태

// 3. rejected : promise 객체를 활용해서 false값에 도착한 상태


// ============================================

// ★★★★★★★★promise를 활용한 예제문제!!!!!!!!!!!
let coffee = prompt("어떤 커피를 주문하시겠습니까?", "아메리카노")

const order = new Promise((resolve, reject) => {
  if (coffee !== null && coffee !== "") {
    document.querySelector("#start").innerHTML = `
    ${coffee} 주문 접수!`
    setTimeout(() => {
      resolve(coffee);
    },3000)
  } else {
    reject ("커피를 주문하지 않았습니다..")
  }
});

function display(coffee) {
  document.querySelector("#end").innerHTML = `
  ${coffee} 주문이 완료되었습니다 ☕
  `
  document.querySelector("#end").classList.add("active")
  document.querySelector("#start").classList.add("done")
}

function showErr(err) {
  document.querySelector("#start").innerHTML = err;
}

order
.then(display) // if의 true값일때 실행 할 함수!
.catch(showErr);
// 예제문제~~
// function whatYourFavorit() {
//   let fav = "javascript"
//   return new Promise((resolve, reject) => resolve(fav));
// }

// function displaySubject(yyy) {
//   return new Promise((resolve, reject) => resolve(`Hello, ${yyy}`));
// }

// whatYourFavorit()
// .then(displaySubject)
// .then(console.log)

// 위에 예제문제를 async 함수 활용해보기

// async function whatYourFavorit() {
//   let fav = "javascript"
//   return fav;
// }

// async function displaySubject(yyy) {
//   return `Hello, ${yyy}`;
// }

// whatYourFavorit()
// .then(displaySubject)
// .then(console.log)

// ============== 또 다르게 활용하기 ==============

async function whatYourFavorit() {
  let fav = "javascript"
  return fav;
}

async function displaySubject(yyy) {
  return `Hello, ${yyy}`;
}

async function init() {
  const response = await whatYourFavorit();
  const result = displaySubject(response)
  console.log(result)
}
init();
// await 예약어.,.쓰는 이유
// whatYourFavorit()함수의 실행이 끝날때까지 기다린 후 response값을 저장
// response 값을 사용해서 displaySubject()함수를 실행하고 결과값을 result에 저장하기 위해 사용하는것이다.

// async 함수는 기본적으로 비동기처리방식으로 움직이니깐,
// 동기처리방식으로 하기위해서 순차적으로 데이터를 처리해야할떄는
// await을 쓰는 것이다!!!!!!!!!!

// async 함수를 쓰지 않으면 await을 지정하지 않아도 된다
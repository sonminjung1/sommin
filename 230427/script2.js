// 콘솔창에 피자 준비 띄워보기~~~~
// const step1 = (callback) => {
//   setTimeout(() => {
//     console.log("피자 도우 준비");
//     callback()
//   }, 2000);
// }

// const step2 = (callback) => {  
//   setTimeout(() => {
//     console.log("토핑 완료");
//     callback()
//   }, 1000);
// }

// const step3 = (callback) => {  
//   setTimeout(() => {
//     console.log("굽기 완료");
//     callback()
//   }, 2000);
// }

// console.log("피자를 주문합니다.")
// step1(function() {  // 함수 호출하기
//   step2(function() {
//     step3 (function() {
//       console.log("피자가 준비되었습니다.")
//     })
//   })
// })

// 콘솔창에 피자 준비 띄워보기~~~~ 더 쉽게 쓰는 법!
const pizza = () => {
  return new Promise((resolve, reject) => {
    resolve ("피자를 주문합니다.");
  });
};

const step1 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("피자 도우 준비");
    }, 3000);
  })
}

const step2 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("토핑 완료");
    }, 3000);
  })
}

const step3 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("굽기 완료");
    }, 3000);
  })
}

pizza()
  .then ((result) => step1(result))
  .then ((result) => step2(result))
  .then ((result) => step3(result))
  .then ((result) => console.log(result))
  .then(() => {
    console.log("피자가 준비되었습니다. 🍕")
  })
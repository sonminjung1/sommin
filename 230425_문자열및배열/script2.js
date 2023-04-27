// 자바스크립트로 prompt로 숫자를 받고 해당 숫자 개수가 1개 이상이면, 첫번째 숫자를 제외한 숫자를 화면에 출력하고 만약 해당 숫자 개수가 1개이면 화면에 모두 출력해주는거 만들어줘

let origin = document.querySelector("#origin");
let result = document.querySelector("#result");

let numbers = prompt("숫자를 입력해주세요");

// function tail(e) {
//   let num = ""
//   if (e.lenth > 1) {
//     num = e.slice(1);
//   } else {
//     num = e;
//   }
//   return num
// }

// 두번째 방법!!!!! > 삼항조건 !
const tail = function(e) {
  let sum = e.length > 1 ? e.slice(1) : e;

  return sum;
}

origin.innerHTML = numbers;
result.innerHTML = tail(numbers);
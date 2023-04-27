// 내가 한 것!!!!!!!!!!
// const btn = document.querySelector("button");


// btn.addEventListener("click", function() {


//   const num = document.querySelector("#user-number").value;
//   num.value = "";
//   document.querySelector("#result").innerText = num

//   if(num >= 10) {
//     alert ("10보다 작은 숫자를 입력해주세요");
//   }
// })

// 선생님이 한 것
const btn = document.querySelector("button");
const num = document.querySelector("#user-number")
const result =document.querySelector("#result")

btn.addEventListener("click", function(e) {
  e.preventDefault();
  let n = num.value; // 이거 이해하기 !!!!!!!!!!
  try {
    if (n === ""|| isNaN(n)) {
      throw "숫자를 입력하세요"
    }
    n = parseInt(n); // 숫자로서의 자격을 부여한다.
    if (n <= 10) {
      result.innerHTML = n;
    }
    if (n > 10) {
      throw "10보다 작은 수를 입력하세요!"
    }
  } catch(err) {
    alert (err) //여기서 alert는 throw문을 반환한다.
  } finally {
    num.value = "";
  }
});

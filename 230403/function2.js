// 10 지역변수 / 전역변수
// let myVar = 100;
// test();
// document.write("myVar" + myVar)

// function test() {
//   let myVar = 50;
// }


//11 블록변수 => 블록{}안에서만 유효합니다.
// add("abc", "123");

// function add(a, b) {
//   let local = a + b;
//   if(b != null) {
//     let block = b + a;
//     console.log(block);
//   }
//   console.log(local);
// }

// 12 즉시 실행 함수
// (function() {
//   let num = 100;
// function menu() {
//   num += 100;
//   alert(num);
// }

// menu();

// }());

// function menu() {
//   alert(num);
// }

function showDetail() {
  document.querySelector('#desc').style.display = "block";
  document.querySelector('#open').style.display = "none";
}

function hideDetail() {
  document.querySelector('#desc').style.display = "none";
  document.querySelector('#open').style.display = "block";
}

let coverImage = document.querySelector('#cover');
coverImage.onclick = function() {
  alert('아이유 선행 박수받다!')
}

coverImage.onmouseover = function() {
  coverImage.style.border = "5px rgb(223, 149, 174) solid"
}
coverImage.onmouseout = function() {
  coverImage.style.border ="";
}
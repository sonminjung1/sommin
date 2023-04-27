// 자바스크립트 객체 만들기!!!!
// - 내장객체 : 
// Date () Math ()

// * 객체란  :
// - 프로그램에서 인식할 수 있는 모든 대상
// - 여러개의 데이터를 하나로 묶어놓은 대상
// - "회원" 객체 > 
// 나이 : 20
// 성별 : "여자/남자"
// 사는곳 : "서울"

// document.querySelector => DOM
// window.onload => BOM
// window.body => BOM

// > 직접 개발자가 정의 할 수 있는 사용자 정의 객체 만들 수 있다!

// 객체의 형태 > 
// 객체명 {
//   key : value => 프로퍼티
//   key : value => 프로퍼티
// }

// 예제로 책을 객체로 만들어보기!!!!!! ★★★★
// let book1 = {
//   title : "자바스크립트",
//   pages : 643  
// };

// book1.title; // 첫번째방법 . 이렇게 불러올 수 있음
// book1["pages"]; // 두번째방법 . 이렇게 불러올 수 있음

// 새로운 걸 넣고싶을 때
// book1.author = "손민정";

// 인스턴스로 내장객체를 만들어서 변수명에 
// let book = new Object();
// book.title = "손민정"; // 객체에 내용을 추가할 수 있다.
// delete book.title; > 객체와 내용을 삭제하는 방법
// book.title = undefined; > 객체는 남겨두고 내용만 삭제하는 방법


// 예제 1
// let student = {
//   name : "park",
//   score : {
//     history : 85,
//     science : 98,
//     average : function() {
//       return (this.history + this.science) / 2
//       // 객체 안에 또다른 객체만들기 -> 객체 중첩!
//     }
//   }
// }



// 예제 2
// let book = {
//   title : "파이썬",
//   pages : 365,
//   buy : function() {
//     console.log("이 책을 구입했습니다.")
//     // function은 생략이 가능하다.
//   }
// }

// let book2 = {
//   title : "자바스크립트",
//   pages : 500,
//   author : "민정손",
//   done : true,
//   finish : function() {
//     book2.done == false ? console.log("읽는 중") : console.log("완독!");
//   }
// }
// 콘솔창에 book2.finish(); 쳐보기!


// 좀 더 편리하게 하기위한 this! ★★★★★★★★★★
// let book2 = {
//   title : "자바스크립트",
//   pages : 500,
//   author : "민정손",
//   done : true,
//   finish : function() {
//     this.done == false ? console.log("읽는 중") : console.log("완독!");
//   }
// }


//  ★★★★★★★★★★ 왕중요  ★★★★★★★★★★
// 변수1 = 변수2 대입하고 변수2에 내용을 변경하면
// 변수2번만 바뀌고 변수1은 안바뀌나 객체1 = 객체2 대입하고,
// 객체2에서 내용을 변경하면 객체1도 내용이 똑같이 바뀜!!!!!

// ★ 원시 유형 자료복사 = 변수 ★
// ★ 참조 주소 복사 = 객체 ★

// let bag1 = {
//   color : "blue",
//   width : 30,
//   height : 50
// };

// let bag2 = bag1;

// bag1;
// {color: 'blue', width: 30, height: 50}
// bag2;
// {color: 'blue', width: 30, height: 50}
// bag2.color = "red";
// 'red'
// bag2;
// {color: 'red', width: 30, height: 50}
// bag1;
// {color: 'red', width: 30, height: 50}


// 동일한 key & value 값을 가지고 있는 프로퍼티와 메서드 객체를
// 만약 100개를 만들어야한다면 ? 

// > 생성자 함수!!!!!!!!!!!!!!!!!
// = 동일한 프로퍼티 및 메서드를 가지고 있는 객체를 만들 때 사용할 수 있는 함수를 의미합니다.
// ==> 붕어빵 틀이라고도 한다.~~~


// > 인스턴스 객체!!!!
// = 생성자 함수를 통해서 만들어진 복제된 객체 !


// 인스턴스 객체 뭐뭐있지?
// let today = new Date();
// new Date() 에는 생성자 함수가 들어있기 때문에 우리는 사용할 수 있는거다

// 생성자 함수 만드는 방법 ★★★★ 
// function Book(매개변수1, 매개변수2, ....) {
//   this.매개변수1 = 매개변수1;
//   this.매개변수2 = 매개변수2;

//   this.메서드1 : function() {...}
//   this.메서드2 : function() {...}
// }

// 생성자 익명함수 사용방법 ★★★★
// const Book(매개변수) = function() {
//   this.매개변수1 = 매개변수1;
//   this.매개변수2 = 매개변수2;

//   this.메서드1 : function() {...}
//   this.메서드2 : function() {...}
// }


// 생성자 함수 만들기 예제!!!!! ★★ 
// function Book(title, pages, done) {
//   this.title = title;
//   this.pages = pages;
//   this.done = done;
//   this.finish = function() {
//     let str = "";
//     this.done == false ? str = "읽는 중" : str = "완독!";
//     return str;
//   }
// }
// let book1 = new Book("파이썬", 657, false);
// let book2 = new Book("자바스크립트", 360, true);

// document.write(`- ${book1.title}- ${book1.pages}쪽 - ${book1.finish()} <br>`)
// document.write(`- ${book2.title}- ${book2.pages}쪽 - ${book2.finish()}`)

// ★★ 자바스크립트 클래스를 활용한 객체 생성 방법!!!!!
// class 클래스명 {
//   constructor() {
//     프로퍼티1,
//     프로퍼티2,
//     프로퍼티3
//   }
//   메서드1() {}
//   메서드2() {}
// } 

// 생성자 함수 (클래스를 활용한) 만들기 예제!!!!! ★★★★★★ 요즘 많이 사용하는 것!
// class Book2 {
//   constructor(title, pages, done) {
//     this.title = title;
//     this.pages = pages;
//     this.done = done;
//   }
//   finish() {
//     let str = "";
//     this.done == false ? str = "읽는중" : str = "완독!";
//     return str; // finish는 메서드!
//   }
// }
// let book1 = new Book2("파이썬", 657, false);
// let book2 = new Book2("자바스크립트", 360, true);
// document.write(`- ${book1.title}- ${book1.pages}쪽 - ${book1.finish()} <br>`)
// document.write(`- ${book2.title}- ${book2.pages}쪽 - ${book2.finish()}`)



// 예제문제 > 원기둥의 부피를 구하는 프로그램
// 생성자 함수 및 클래스를 사용해서 인스턴스 객체를 생성하고 이를 활용해서 원기둥의 부피를 구해보세요!

// 원기둥의 부피 : 밑면적 * 높이
// 밑면적 = 파이 * (지름/2) * (지름/2)

// 1. 버튼의 대한 기능 정의
// 2. 사용자가 입력하는 지름 및 높이 값에 대한 저장 공간
// 3. 원기둥의 부피를 구하는 계산식에 대한 정의
// 4. 계산후 결과값을 출력에 대한 정의

// 1 . 첫번째  > 일반적인 생성함수 만들기!
// function cylinder(cylinderDiameter, cylinderHeight) {
//   this.diameter = cylinderDiameter;
//   this.height = cylinderHeight;

//   this.volume() = function() {
//     let radius = this.diameter / 2;
//     return (Math.PI * radius * radius * this.height);
//   };
// }

// 2 . 두번째 > 클래스로 생성함수 만들기!
class Cylinder {
  constructor(cylinderDiameter, cylinderHeight) {
    this.diameter = cylinderDiameter;
    this.height = cylinderHeight;
  }
  volume() {
    let radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(1);
  }
}


const btn = document.querySelector("button");
const result = document.querySelector("#result")

btn.addEventListener("click", function(e) {
  e.preventDefault();
  const diameter = document.querySelector("#cyl-diameter").value;
  const height = document.querySelector("#cyl-height").value;

  if (diameter == ""  || height =="") {
    result.innerText = `지름과 높이값을 입력하세요`
  } else {
    let cylinder = new Cylinder(diameter, height);
    result.innerText = `원 기둥의 부피는 ${cylinder.volume()}입니다.`;
  }
})


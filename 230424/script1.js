// - 객체 만들어서 사용할 수 있는 객체
// = 사용자 정의 객체

// 객체 선언 > 할당
// ex)
// let book1 = {
//   title : "재밌는 자바스크립트", // 이 한쌍을 "프로퍼티"라고 한다
//   pages : 456
//   // 키 : 벨루
// }
// 객체명.키 = 값
// book1.pages = 50;

// book1.author = "민정"; // 객체의 프로퍼티를 추가시키는 방법 !

// delete.객체명.키 // 키값과 벨루값을 삭제하는 방법
// book1.author = undefined; // 벨루값만 비워두는 방법


// let book2 = {}; // 선언만 먼저 하고 비워두어도 된다
// let book3 = new Object() // 이렇게 할 수도 있다 ..!

// 객체 복사하기!
// 1. 원시유형 복사방법
// - 변수 2개 예시

// let num1 = 100;
// let num2 = num1;

// num2 = 100;
// let num2 = 200;
// 각자 정의한대로 잘 변경이 된다.

// 2. 참조 주소 전달하기
// let back1 = {
//   color : "red"
// }
// let back2 = {
//   color : "blue"
// }
// let back2 = back1;
// back2은 레드가 됌!

// *** 생성자 함수 / 클래스
// 똑같은 프로퍼티 & 메서드를 가지고있는 객체를 반복해서 만든다면?

// 생성자 함수 1번만 만들어 놓고 해당 생성자 함수를 활용해서 복제품(*객체)을 만들어서 사용한다면, 보다 편리하게 프로그래밍이 가능!!

// 생성자 함수 = 붕어빵 만드는 틀
// 인스턴스 함수 = 붕어빵 > 틀에서 만들어진 붕어빵
// let today = new Date();



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



// ★★ 객체와 키와 값에 접근하는 방법!!
// ★★ 실습1 ★★
// let bag = {
//   type : "backpack",
//   color : "blue",
//   size : 15
// }
// 여기서 반복문 ~
// for(let key in bag) {
//   console.log(`${key}`);
// }
// for(let key in bag) {
//   console.log(`${key} : ${bag[key]}`)
// }
// 키값 불러올 때 for in문 사용하기!



// ★★ 실습2 ★★
// let book1 = {
//   title : "자바스크립트",
//   pages : 650,
//   buy : function() {
//     console.log("이 책을 구입했습니다!");
//   }
// }

// 새로운 객체를 선언 및 생성하는 방법!
// ex) let keys = new Object();

// let keys = Object.keys(book1);
// console.log(keys);
// keys 함수 키값 불러오기

// let values = Object.values(book1);
// console.log(values);
//vlaues 함수 vlaue값 불러오기

// let entries = Object.entries(book1);
// 키값과 벨루값을 한번에 불러오기

// ★★ 실습3 ★★
let today = new Date();
let arr = new Array(); // Array라는 내장객체! 즉 arr는 인스턴스 객체가 된것이다.

// ★프로토타입이란?★
// 객체를 만들어내는 원형 (*원본)
// 인스턴스 객체(*복제품)의 상위객체 혹은 부모객체
// 위에 Array() , Date()을 '프로토타입'이라고 한다.. 

// 생성자함수와 프로토타입 객체 ★★★★★
// let hello = "안녕하세요!";

// hello
// '안녕하세요!'

// hello.__proto__

// 생성자함수와 프로토타입 객체 실습1
// 여기서 this는 인스턴스 객체를 만들고자하는 인자값을 의미!
// const Book = function(title, pages, done) {
//   this.title = title;
//   this.pages = pages;
//   this.done = done;

//   this.finish = function() {
//       this.done === false ? str = "읽는중" : str = "완독!";
//       return str;
//   }
// }

// const book1 = new Book("자바스크립트", "650", "false");

// 객체 생성의 최상위 객체 단위 : Object

// Object() > Book > book1
// book1.__proto__; //> 인스턴스 객체의 프로토타입을 확인하고자 할 때 
// Book.prototype; //> 생성자함수의 프로토타입을 확인하고싶을 때 
// Book.prototype; //=> 프로토타입이라는 프로퍼티를 활용해서 생성자 함수 안에 메서드를 추가 생성해보겠습니다!!!!

// ==============================================

// 두가지 방법으로 생성함수를 만들 수 있는데,
// 첫번쨰는 익명함수 , 또는 익명함수로 만들지 않아도 된다.
// const Book = function(title, pages, done) {
//   this.titel = title;
//   this.pages = pages;
//   this.done = done;
// }

// 메서드 함수를 추가해야 할 때!!!!! 왕중요

// Book.prototype.finish = function() {
//   this.done = false ? str = "읽는중" : str = "완독";
//   return str;
// }
// 1. 생성자 함수 or 클래스
// 2. 사용자 정의 객체
// 3. 유사한 혹은 동일한 프로퍼티 또는 메서드를 가지고 있는 객체를 대량으로 생산하고 싶기때문에!!!!! ★★★★★★★★★

// 만약!!!!
// 100% 똑같지는 않지만 새로운 버전의 생성자 함수가 필요하다면?
// function Book (title, price) {
//   this.title = title;
//   this.price = price;
// }

// 프로토타입 함수를 추가하기
// Book.prototype.buy = function() {
//   console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다.`)
// }
// 정상적으로 되었는지 확인하고싶으면?
// const book1 = new Book("ABCD", 10000)
// book1.buy();
// ABCD을(를) 10000원에 구매하였습니다. // 정상으로 출력.


// 만약 교재정보를 추가로 담는 또다른 생성자 함수가 필요하다면?
// function Textbook(title, price, major) {
//   Book.call(this, title, price);
//   this.major = major;
// }

// Textbook.prototype.buyTextbook = function() {
//   console.log(`${this.major} 전공서적, ${this.title}을 구매했습니다!`)
// }
// 정상으로 되었는지 확인해보기
// const book2 = new Textbook("알고리즘", 5000, "컴퓨터공학");
// book2;
// book2.buyTextbook();
// 컴퓨터공학 전공서적, 알고리즘을 구매했습니다!

// buy라는 메서드를 활용하고 싶다면,,,,,
// Object.setPrototypeOf(Textbook.prototype, Book.prototype);
// 생성자 함수의 상속을 받았다고 한다!!!!
// Textbook에 상속을 줬다

// ==============================================

// 클래스로 생성자 함수 만들어보기!!
// class BookC {
//   constructor(title, price) {
//     this.title = title;
//     this.price = price; 
//   }
//   buy() {
//     console.log(`${this.title}을 ${this.price}원에 구매하였습니다.`)
//   }
// }

// 정상으로 되었는지 출력해보기!
// const book1 = new BookC("자바스크립트", 10000);
// book1;
// book1.buy();
// 자바스크립트을 10000원에 구매하였습니다.

// 만약 교재정보를 추가로 담는 또다른 생성자 함수가 필요하다면?
// class TextBookc extends BookC {
//   constructor(title, price, major) {
//     super(title, price);
//     this.major = major;
//   }

//   buyTextBook() {
//     console.log(`${this.major} 전공서적, ${this.title}을 구매하였습니다.`)
//   }
// }

// * 생성자 함수를 활용한 객체 생성 방법 : 고전적이면서 전통적인 방법이다.
// 2015년 ES6버전 : 클래스를 활용한 객체 생성방법입니다.

// ==============================================

// 실습문제!!!!!!!! ★★
// 사용자로부터 강아지 이름을 받습니다.
// 안내문으로 강아지 이름이 담겨있는 문장을 띄어볼겁니다!

let ques = prompt("강아지의 이름을 알려주세요");
let ques1 = prompt("고양이 이름을 알려주세요");

// 생성자 함수 만들기
class Pet {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  run() {
    alert(`${this.name} is running`)
    location.reload();
  }
}

// 지금 만들었던 pet 클래스를 상속받는 cat 클래스를 신규로 만들어보세요
// 그리고, 사용자로부터 고양이 이름을 받아서 안내문에
// 고양이 이름 : 품종 : 색깔을 출력해보세요
class Cat extends Pet {
  constructor(name, color, breed) {
    super(name, color);
    this.breed = breed;
  }
  viewInfo() {
    alert(`고양이 이름: ${this.name}, 품종:${this.breed}, 색깔 : ${this.color}`)
  }
}

const dog = new Pet(ques, "yellow");
dog.run();

const cat = new Cat(ques1, "흰색", "코숏");
cat.viewInfo();

// ==============================================
//사용자 정의 객체 만들기
// 1. 리터럴 표기법
// > 리터럴 : 프로그래밍을 할 때, 자료를 표기하는 방식
// > 변수를 선언함과 동시에 변수 안에 객체의 값을 지정해 주는 표기 방식 => 리터럴 표기법


// 2. 생성자 함수
// > 객체를 만들어내는 함수를 선언하고, 그 함수를 활용해서 객체를 생성 및 운영하는 방법

// let book = {
//   title : "자바스크립트",
//   author : "손민정",
//   pages : 600,
//   price : 15000,
//   info : function() {
//     alert(this.title + "책의 분량은" + this.pages + "쪽 입니다.");
//   }
// }

// * 예제
// let toyRobot = {
//   productId : "2023-04-04",
//   name : "Robot_1",
//   price : "25,000",
//   madeIn : "korea",
//   quantity : 10,
//   showStock : function() {
//     document.querySelector('#display').innerHTML
//     = this.name + " 제품은" + this.quantity + "개 남았습니다."
//   }
// }

// toyRobot.showStock()

// ★★ 프로토타입 ★★
// function book(title, author, volume, price) {
//   this.title = title;
//   this.author = author;
//   this.volume = volume;
//   this.price = price;
// }

// let html = new book('자바스크립트',"son","600","28,000");
// let css = new book('스타일코딩',"kim","365","16,000");
// let python = new book('파이썬코딩',"lee","200","13,000");

// let bookList = [html, css, python];

// document.write("<h1>책 제목으로 살펴보기</h1>");
// for(let i = 0; i <bookList.length; i++) {
//   document.write("<p>" + bookList[i].title + "</p>")
// }


// ★★ 평균 점수 내기
// function TestScore(name, kor, eng) {
//   this.userName = name;
//   this.korNum = kor;
//   this.engNum = eng;

// TestScore.prototype.getTestInfo = function() {
//     document.write("이름 : " + this.userName + "<br>");
//     document.write("국어 : " + this.korNum,"<br>");
//     document.write("영어 : " + this.engNum,"<br>")
//   }

//   this.getAvg = function() {
//     return((this.korNum + this.engNum) / 2);
//   }
// }

// let kimgun = new TestScore("김군", 80, 90);
// let ohgun = new TestScore("오군",100, 80);

// kimgun.getTestInfo();
// document.write(`평균점수 : ${kimgun.getAvg()}`,"<br>","<br>")
// ohgun.getTestInfo();
// document.write(`평균점수 : ${kimgun.getAvg()}`,"<br>")
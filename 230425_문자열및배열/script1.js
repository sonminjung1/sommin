// 객체가 못하는 치명적인 단점!
// 배열은 인덱스 값을 가지고있다. 인덱스 값으로 배열을 자유롭고 효율적으로 움직일 수 있다 > 정렬을 해야할 때, 순서를 필터링을 해야할 때,,,,,,,,,,

// ====================정규 표현식====================
// * 정규표현식을 왜 사용하는가?
// 왜 사용하는가? 특정 패턴을 가지고 있는 문자 및 숫자를 추출 및 편집하기 위해서!

// 저육표현식을 사용하려면, 패턴이 필요하다 ! /패턴/

// 패턴을 정의하는 클래스 3가지!

// 1. 숫자 digit 클래스 :
// let regexp = /\d{3}/
// 숫자 3자리의 패턴을 가지고있는 걸 찾아줘!
// regexp.test("Hello"); 
// 테스트 하는 방법 > false가 나옴
// regexp.test(123);
// true가 나옴
// ---------------------------------
// let str = "ES2023 is powerful";
// str.match(/ES6/); 
// ES6라는 단어가 있는지 확인해줘 > null이 나옴 
// ---------------------------------
// str.replace(/ES2023/, "ES6");
// 단어를 바꿔줘!
// 'ES6 is powerful' > 이렇게 나옴
// ---------------------------------
// /es/i.test(str); 
// es라는 단어가 있는지 확인해줘 (i를 넣으면 대소문자 안가림)
// true 나옴!


// 2. 공백 space 클래스 :
// \s : 공백, 탭, 줄바꿈 의미
// \S : 공백이 아닌 모든 문자


// 3. 단어 word 클래스 :
// \w : 단어에 들어가는 문자 및 숫자를 의미
// \W : 단어에 들어가지 않는 모든 문자

// 문자열의 시작과 끝을 체크하는 특수문자!!!! ^
// ^ : 케럿 => 해당 단어로 시작하는 문자를 찾을 때
// let hello = "hello everyone";
// /^h/.test(hello)
// h로 시작하는지 확인해줘
// true가 나옴

// ---------------------------------

// $ : 달러 => 해당 단어로 끝나는 문자를 찾을 때
// let hello = "hello everyone";
// /one$/.test(hello);
// one으로 끝나는게 맞는지 확인해줘
// true가 나옴


// ========================================

// 정규표현식에서 반복적인 검색을 할 때 사용하는 표현 방법

// 1. 패턴{n} : 패턴이 n번 반복되는 것을 찾아줘
// 2. 패턴{n, } : 패턴이 최소 n번 이상 반복되는 것을 찾아줘
// 3. 패턴{m, n} : 패턴이 최소 m번 이상, 최대 n번 이하 반복되는 것을 찾아줘

// let str = "Oooops";
// str.match(/o{2}/);
// o가 2개 들어간걸 찾아줘
// 결과 : ['oo', index: 1, input: 'Oooops', groups: undefined]

// str.match(/o{2,}/);
// 결과 : ['ooo', index: 1, input: 'Oooops', groups: undefined]

// str.match(/o{2,4}/);
// 결과 : ['ooo', index: 1, input: 'Oooops', groups: undefined]

// str.match(/o{2,4}/i);
// 대소문자 가리지 말고 찾아줘
// 결과 : ['Oooo', index: 0, input: 'Oooops', groups: undefined]

// ---------------------------------------

// let str2 = "ES2023 is powerful";
// let regexp = /ES2023|ES6/;
// regexp.test(str2);
// 결과 : true

// ====================정규 표현식 정리====================

// 조건에 일치하는 문자열 찾기 특수문자
// [] : 특정 식의 시작과 끝 ex) [0-9] => 1에서 9까지
// ^x : x로 시작하는 문자열을 찾아줘
// x$ : x로 끝나는 문자열을 찾아줘
// x+ : x가 한번 이상 반복되는 문자열을 찾아줘
// x? : x가 0번 또는 1번만 있는 문자열을 찾아줘
// x* : x가 0번 이상 반복되는 문자열을 찾아줘
// . : 특정 문자 하나를 찾을 때 사용
// [x.j] : x라는 문자와 j라는 문자 사이에 문자 하나만 존재하는 패턴을 찾아줘
// > xAj [O], xEj [O], xuhj [x] 

// * 숫자패턴
// /^[0-9]+$/

// * 양의정수 패턴
// /^[1-9]\d*$/

// * 음의정수 패턴
// /^\[1-9]\d*$/

// * 영문자 패턴
// /^[a-zA-Z]+$/

// * 영문자 및 숫자 패턴
// /^[a-zA-Z0-9]+$/
// ---------------------------------------
// * 문자열과 배열 변환하는 방법

// - 문자열을 배열로 만드는 방법 !

// let hello = "Hello goodmorning";

// let str5 = "Hello everyone";
// str5.split("");
// let array = str5.split("");
// array3 = [...str5];
// array4 = Array.from(str5);


// ====================예제 문제===================
// 사용자로부터 영문 소문자를 받고 첫번째 스펠링만 대문자,
// 나머지는 소문자로 화면에 띄워보세요!

// 첫번째 방법
// let string = prompt("소문자로만 입력해 주세요");
// let firstCh = string[0].toUpperCase();
// let remainCh = string.slice(1);
// let result = firstCh + remainCh

// document.write(result);

// 두번째 방법 // join이라는 메서드 꼭 기억하긔!!!!!
// let string = prompt("소문자로만 입력해 주세요");
// const result = [string[0].toUpperCase(), string.slice(1)].join("")
// document.write(result);


// ====================배열!!===================
// * 배열 : 여러개의 객체를 한꺼번에 묶거나 일부분을 삭제 및 수정하거나 할 때 사용할 수 있는 객체 타입!

// *배열을 생성하는 방법 3가지
// 1. 빈 배열을 만들고 값 할당
// 2. 리터럴 표기법으로 생성 > 리터럴은 문자!
// 3. Array 객체의 인스턴스 객체로 생성

// 1. 빈 배열

// let seasons = [];
// seasons[0] = "spring";
// seasons[1] = "summer";
// seasons[2] = "fall";
// seasons;
// 결과 : (3) ['spring', 'summer', 'fall']

// 2. 리터럴 표기법
// let pet = ["dog", "cat", "mouse"];
// pet
// 결과 : (3) ['dog', 'cat', 'mouse']

// 3. 내장객체를 사용하여 Array 객체의 인스턴스 객체로 생성
// let fruit = new Array("사과", "복숭아", "바나나");
// fruit;
// 결과 : (3) ['사과', '복숭아', '바나나']

// ----------------배열객체 안의 문자를 수정하고싶을 때----------------
// let pets = ["dog", "cat", "mouse"];
// pets[1] = "hamster";
// pets;
// 결과 : (3) ['dog', 'hamster', 'mouse']

// pets[4] = 'lion';
// pets;
// 결과 : (5) ['dog', 'hamster', 'mouse', 비어 있음, 'lion']
// 배열은 의리가 있다,, 순서가 있고 자리를 비워둔다 ,,

// 배열과 반복문 !!! 영원의 단짝 ^______^

// let colors = ["green", "red", "blue", "white", "black"]
// console.log(colors);

// 각각 하나씩 호출하고 싶을 땐?
// for문 활용하기
// for (i = 0; i < colors.length; i++) {
//   console.log(colors[i])
// }

// forEach문 활용하기 > function 함수와 매개변수, 인자값 필요!
// colors.forEach(function(color) {
//   console.log(color)
// })

// 여기서, 인자값이 2개라면?
// colors.forEach(function(color, i) {
//   console.log(`colors[${i}] : ${color}`)
// })

// 여기서, 인자값이 3개라면?
// colors.forEach(function(color, i, array) {
//   console.log(`${array} : ${i} : ${color}`)
// })

// ----------------배열과 배열을 서로 합치는 방법 ---------------

// 1. concat() 메서드 함수
// 2. 전개 연산자 : ...


// let vegitabla = ["양상추", "피클", "토마토"]
// let meet = ["불고기"]
// let meetBugger = vegitabla.concat(meet);
// // meetBugger // 결과 (4) ['양상추', '피클', '토마토', '불고기']

// let meetBugger = vegitabla.concat(meet, "빵");

// let cheese = ["모짜렐라", "슈레드"];

// let cheeseBugger = [...vegitabla, ...cheese];
// cheeseBugger // 결과 >  (5) ['양상추', '피클', '토마토', '모짜렐라', '슈레드']


// ----------------배열 요소 정렬 ---------------
// 1. 역순으로 정렬 : reverse()
// let numbers = [6 ,5, 4, 6, 29];
// numbers.reverse(); // 결과 > (5) [29, 6, 4, 5, 6]

// 2. 크기에 따라 정렬 : sort()
// let week = ["mon", "tue", "sun"];
// week.sort(); // 결과 > (3) ['mon', 'sun', 'tue']

// let values = [5, 6, 8, 9, 29];
// values.sort(); // 결과 > (5) [29, 5, 6, 8, 9]
// 컴퓨터는 앞자리 숫자만 본다,,, 그래서 다른 방법을 생각해봐야한다 !
// 즉 아래와 방법으로 해야함 ! (외우면 됌)

// 첫번째 방법!
// values.sort(function (a, b) {
//   if (a > b) return 1;
//   if (a < b) return- 1;
//   if ( a == 0) return 0;
// });
// 결과 (5) [5, 6, 8, 9, 29]

// 두번째 방법!
// values.sort(function(a, b) {
//   return a - b;
// })
// 결과 > (5) [5, 6, 8, 9, 29]


// 배열 요소에서 맨 끝에 값을 추가하거나 제거하는 방법
// - 요소.pop() : 맨 마지막 값을 제거하는 메서드
// - 요소.push() : 맨 마지막 값을 추가하는 메서드

// - 요소.shift() : 맨 앞에 값을 제거하는 메서드
// - 요소.unshift() : 맨 앞에 값을 추가하는 메서드

// 특정위치에 어떠한 요소를 추가하거나 제거하는 메서드
// : splice() : 
// : slice(인수) : 해당 인수부터 끝의 인수 직전까지 선택
// : slice(인수, 인수) : 첫번째 인수부터 두번째 인수 바로 직전까지 선택

// : splice(인수) : 해당 인수부터 끝까지 요소를 모두 선택
// : splice(인수, 인수) : 첫번째 인수부터 두번째 인수개수만큼 요소를 선택해서 삭제
// let subject = ["html", "css", "javascript", "react","typescript"];
// subject.splice(2); // 결과 > (3) ['javascript', 'react', 'typescript']
// subject; // 결과 >  (2) ['html', 'css']

// splice() : 원본 배열을 수정합니다.
// slice() : 원본 배열을 수정하지 않습니다. > 특정 요소를 떠서 그것만 수정해야된다면 이걸 사용!


// ★★ 예제문제 ★★
// 정의를 해봅시당
// 1. 출력 공간에 대한 정의!
// - 원래 배열의 출력, - 모든 값을 더한 배열 출력
// 2. 주어진 배열을 더하는 연산식 정의
// 3. 출력 방식에 대한 정의
// - 테이블 형식

let origin = document.querySelector("#origin");
let result = document.querySelector("#result");

let numbers = [2, 4, 6, 8, 10];
showArray(origin, numbers);

// ---------------------------------

function showArray(area, numbers) {
  let str = "<table><tr>" // 테이블 태그 만들기!
  for (let i = 0; i < numbers.length; i++) {
    str += "<td>" + numbers[i] + "</td>"
  }
  str += "</tr></table>";
  area.innerHTML = str;
}
// ---------------------------------
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
numbers.push(sum);
showArray(result, numbers);
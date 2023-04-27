// 문자열 및 배열!!!!

// 자바스크립트 쓰임새
// 1. 전통 프론트엔드 개발 : 웹브라우저 화면에 펼쳐질 수 있는 기술 스킬

// 2. 백엔드 연동 스킬 : 비동기 방식 


// ★ 문자열에서 문자의 위치를 확인하는 2가지 메서드 ★

// 1. chatAt()
// : 매개변수값에 해당하는 인덱스 문자열을 반환할 때 사용!
// ex)
// let str = "good morning";
// str.charAt(5);
// 'm'

// * 사용자로부터 특정 텍스트(*문자)를 수집하고, 해당 텍스트에 특정 문자가 몇번 사용되었는지 확인해보는 프로그램을 만들어봅시다
// const string = prompt("영어단어를 입력해주세요");
// const letter = prompt("어떤 문자를 체크하시겠습니까?");

// function counting(str, ch) {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     // if (str.charAt(i) === ch)
//     if (str[i] === ch)
//     // 둘중 하나 쓰면 됌 ,,!

//     count += 1;
//   }
//   return count;
// }

// const result = counting(string, letter);

// document.write(`"${string}"에서 "${letter}"이라는 스펠링은 "${result}"개입니다.`)

// // ==============================================

// 2. indexOf()
// : 매개변수값에 해당하는 문자의 인덱스 넘버를 반환할 때 사용!
// ex)
// let str1 = "Good morning everyone, Beautiful morning";
// str1.indexOf("morning");
// 5 // morning이 시작하는 인덱스 넘버를 알려준다.

// str1.indexOf("evening");
// -1 // 없는 단어는 -1로 나온다 이걸 역으로 사용해서 응용할 수 있다.
// let firstIndex = str1.indexOf("morning");
// firstIndex;
// str1.indexOf("morning", firstIndex+1); // 두번째 morning이라는 단어를 찾고싶을 땐 firstIndex 변수를 먼저 정의하고, +1을 해준다!


// 사용자로부터 문자열을 입력받습니다.
// const inputString = prompt("문자열을 입력하세요");

// // 사용자로부터 찾을 문자를 입력받습니다.
// const targetChar = prompt("찾을 문자를 입력하세요");

// // 문자열에서 찾을 문자의 개수를 초기화합니다.
// let charCount = 0;

// // 문자열을 순회하면서 찾을 문자의 개수를 세고, charCount 변수에 할당합니다.
// for (let i = 0; i < inputString.length; i++) {
//   if (inputString.charAt(i) === targetChar) {
//     charCount++;
//   }
// }

// // 찾은 결과를 출력합니다.
// console.log(`'${targetChar}' 문자의 개수: ${charCount}`);

// ★ 문자열에서 문자를 확인하고싶을 때
// 1. starWith() : 특정 문자나 문자열로 시작하는지 확인
// ex) 문자열.starWith(문자, 인덱스넘버) : 특정 인덱스 넘버에 문자가 존재하는지 여부를 확인할 때
// let str2 = "Hello everyone";
// str2.startsWith("Hello");
// true

// str2.startsWith("el", 1); // 첫번째는 el이 있는지 확인, 인덱스값이 1이 맞는지 확인 맞으면 true
// true

// 2. endWith() : 특정 문자나 문자열로 끝나는지 확인
// ex) 문자열.endWith(문자, 전체길이) : 문자열에 전체 길이 가운데 마지막 문자열에 해당 문자여부 확인할 때
// ex)
// str2.endsWith("everyone");
// true

// str2.endsWith("lo", 5);
// true

// str2.indexOf("every") !== -1
// true
// > every 문자가 있다면,,

// str2.includes("every");
// true

// 3. includes() : 특정 문자나 문자열에 어떤 문자가 포함되었는지 확인 할 때 includes() 메서드를 사용

// ==============================================

// ★★ 문자열에서 공백을 제거하는 3가지 메서드
// 1. 문자열.trim() : 문자열의 앞뒤 공백 제거
// 2. 문자열.trimStart() : 문자열의 앞쪽 공백만 제거하기
// 3. 문자열.trimEnd() : 문자열의 끝쪽만 공백 제거하기

// ==============================================

// ★★ 문자열에서 대소문자 바꾸는 2가지 메서드
// 1. 문자열.toUpperCase() : 문자열 모두 대문자
// 2. 문자열.toLowerCase() : 문자열 모두 소문자
// ex)
// let str4 = "Good Moring!";
// str4.toUpperCase();
// 'GOOD MORING!'

// ==============================================

// ★ 문자열에서 제일 중요!!!!!!!!!! ★
// 문자열에서 특정 문자열만 추출할 때 사용하는 2가지 메서드
// 1. 문자열.substring(시작위치, 끝위치) : 시작위치부터 끝위치 직전까지의 문자열을 추출 및 반환
// 이럴경우, 문자열.substring(시작위치) : 시작위치부터 끝 위치까지 반환!

// 2. 문자열.slice(시작위치, 끝위치) : 시작위치부터 끝위치 직전까지의 문자열을 추출 및 반환
// 이럴경우, 문자열.slice(시작위치) : 시작위치부터 끝 위치까지 반환!

// 위에 두개의 차이점은??????????
// slice 메서드는 음수값도 가져올 수 있다!!
// ex)
// let str4 = "Good Moring!";
// str4.slice(-5, 12);
// 'ring!'
// 예를들어 substring() 메서드에서 -5가 온다면 저절로 0값으로 바뀜!

// ==============================================
// 문자열에서 특정 구분자에 따라서 조깰 때 사용하는 메서드
// 메서드 : split(구분자) 
// ex)
// str5 = "Hello everyone";
// let array1 = str5.split(" ");
// array1;
// (2) ['Hello', 'everyone'] // 배열객체로 만들어진다..!
// 여기서 잠깐 모든 글자를 다 쪼개고 싶을 땐?
// let array2 = str5.split("");
// array2;
// (14) ['H', 'e', 'l', 'l', 'o', ' ', 'e', 'v', 'e', 'r', 'y', 'o', 'n', 'e']

// ==============================================
// ★★★★ 예제문제 ★★★★ 

// const button = document.querySelector("button");
// const email = document.querySelector("#userEmail");
// const  result = document.querySelector("#result");

// button.addEventListener("click", function() {
//   // e.preventDefault();
//   let username = "";
//   let domain = "";

//   if (email.value !== "") {
//     username = email.value.split("@")[0];
//     username - username.substring(0, 2);
//     domain = email.value.split("@")[1];
//     result.innerText = `${username}...@${domain}`;
//     email.value = "";
//   }
// })

// ==============================================

// ★★★★ 정규표현식 !!!!!!! 은근히 많이 사용됌
// : 특정 패턴을 사용해서 문자열을 표현하는 언어!

// 크게 3가지만 알면 된다...............
// 1. 숫자 digit 클래스 :
// \d : 0 - 9 사이의 숫자
// \D : 숫자가 아닌 모든 문자
// ex)
// let regexp = /\d{3}/;
// regexp.test("123");
// true
//---------------------------------
// ex) match
// let str = "ES2023 is powerful";
// str.match(/is/);

// str.match(/ES\d/);
// ['ES2', index: 0, input: 'ES2023 is powerful', groups: undefined]
//---------------------------------
// ex) replace
// let str = "ES2023 is powerful";
// str.replace(/ES2023/, "ES6"); // ES6로 바꿔줘!
//---------------------------------
// ex) 소문자, 대문자 가리지 않고 글자를 찾아줘
// let str = "ES2023 is powerful";
// /es/.test(str); // false
// /es/i.test(str); // true
//---------------------------------
// let hello = "hello everyone";
// /^h/.test(hello); // true
// /one$/.test(hello); // true
//---------------------------------
// "ES2023".match(/[0-9]/g);
// (4) ['2', '0', '2', '3'] // 숫자를 다 찾아줌
// "ES2023".match(/[^0-9]/g);
// (2) ['E', 'S'] // 숫자를 제외한 문자를 찾아줌
//---------------------------------

// 2. 공백 space 클래스 :
// \s : 공백, 탭, 줄바꿈 의미
// \S : 공백이 아닌 모든 문자

// 3. 단어 word 클래스 : 
// \w : 단어에 들어가는 문자 및 숫자를 의미
// \W : 단어에 들어가지 않는 모든 문자
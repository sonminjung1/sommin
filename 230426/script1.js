// 문자열 & 배열

// 배열 => 순서 / 중간요소 수정, 편집 가능!
// 배열을 변형하는 메서드 함수!

// 1) map() : 배열 요소의 동일한 함수를 적용하고자 할 때
// 사용방법 1) map(함수(값)) 2) map(함수(값, 인덱스))

// 2) filter() : 배열 요소에 특정한 조건식을 부여해서 해당 값을 추출하고자 할 때
// 사용방법 1) filter(함수(값)) 2) filter(함수(값, 인덱스))


// 3) reduce() :  배열 요소에 특정 콜백함수를 실행해서 최종적인 하나의 결과값을 만들어 낼 때
// 사용방법 1) reduce(함수(누산기, 현재값, 인덱스, 원래배열), 초기값)
// 필수입력사항 : 누산기, 현재값은 반드시 들어가야한다!
// 비필수입력사항이지만, 입력 권장 : 

// ================ Map & Set  ================
//  > 객체와 배열의 좋은 점만 추출한 자료형태

// 객체의 단점 : 
// - 객체의 프로퍼티에는 순서가 존재하지 않습니다.
// > for문을 활용해서 특정 구간을 반복하는데 어려움 혹은 제약이 있다

// - 객체는 프로퍼티의 개수를 알려주는 속성값이 없습니다.

// let myCup = new Map([
//   ["color", "white"],
//   ["haveHandle", true],
//   ["material", "ceramic"],
//   ["capacity", "300ml"]
// ])


// Map 데이터 자료형에서 사용할 수 있는 프로퍼티와 메서드

// size : 맵 요소의 개수를 알려주는 프로퍼티
// set(키, 값)을 추가해주는 메서드
// get(키) 해당 맵의 키 값을 반환하는 메서드
// has(키) 해당 키가 맵에 있는지 여부에 따라서
// true 혹은 false 값을 반환해주는 메서드

// delete(키) 해당 키가 존재하는 프로퍼티를 삭제
// clear() 맵의 모든 요소를 삭제 
// keys() 각 요소의 키만 모아서 반환
// values() 각 요소의 값만 모아서 반환
// entries() 각 요소의 키와 값을 반환

// 이터러블 = Iterable => 순서대로 처리할 수 있는 ..!

// Map 단점
// > Map 데이터 안에 들어가는 요소가 중복이 되더라도 문제가 되지 않는다.
// 즉 엄격한 데이터를 관리해야 할 때 중복이 되면 문제가 생길 수 있다

// 그러므로 나온게 set()이다!!
// 값이 중복될 수 없는 엄격한 자료를 관리할 수 있다.

// map()은 키값과 value값이 있지만, set()은 오직 키값만 있다!!!!


// ★ 예시 문제 ★ 
// 세사람의 신청과목에서 중복되지 않게 최종신청과목에 출력되게 하시오

// const member1 = ["HTML", "CSS"];
// const member2 = ["CSS", "JAVASCRIPT", "REACT"];
// const member3 = ["JAVASCRIPT", "TYPESCRIPT"];

// // 배열을 합치기 위해서 전개연산자 활용하기!!!!!!!!!! ★★
// const subjects = [...member1, ...member2, ...member3];
// // console.log(subjects);
// // 여기서 배열객체 중에서 중복되는 걸 거르기 위해서 set()활용하기
// const resultList = new Set();
// subjects.forEach(subject => {
// resultList.add(subject);
// });
// // console.log(resultList)

// const result = document.querySelector("#result");
// result.innerHTML = `
// <ul>
// ${[...resultList]
//   .map(subject => `<li>${subject}</li>`)
//   .join("")}
// </ul>
// `;


// 내가 혼자서 안보고 해보기!!!
const member1 = ["HTML", "CSS"];
const member2 = ["CSS", "JAVASCRIPT"];
const member3 = ["JAVASCRIPT", "TYPESCRIPT"];
const result = document.querySelector("#result")


const subjects = [...member1, ...member2, ...member3];

const resultList = new Set();
subjects.forEach(subject => {
  resultList.add(subject)
});
console.log(resultList);

result.innerHTML = resultList





// 배열객체 => 값을 복제할 때,
// 주소복사데이터 유형이다 (원시유형 데이터가 아님!)
// 즉 원본데이터까지 수정될 수 있다 !

// =========== 예시문제에서 이걸 기억해!!! ==============
// 전개 연산자로 데려오면 원본데이터에 영향을 주지 않음!
// ex) const mine = [...fruits];

// const mine = [...fruits];
// console.log(mine)

// mine[1] = "orange"
// console.log(mine)
// console.log(favorit);
// console.log(fruits);

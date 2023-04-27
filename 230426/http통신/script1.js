// 클라이언트 & 서버

// 클라이언트 역할 : 서버에 자료를 요청하는 역할
// 서버의 역할 : 클라이언트가 요청한 자료를 회신하는 역할

// https://www.naver.com/

// http 혹은 https : 프로토콜 => 통신규약
// > 앞으로 웹서버에서 클라이언트가 특정 데이터를 요청한다면,
// 서로 약속한 데이터 형식을 가지고 요청할 때만 값을 출력해주자!

// HTML: 하이퍼 텍스트 마크업 랭귀지
// HTTP : 하이퍼 텍스트 트랜스퍼 프로토콜



// student.json 데이터 불러와서 화면에 출력해보기 실습 ★
// let xhr = new XMLHttpRequest();
// xhr.open("GET","student.json");
// xhr.send(); // 정상으로 데이터가 왔는지 콘솔창에서 확인해보기

// xhr.onreadystatechange = function() {
//   if(xhr.readyState == 4 && xhr.status == 200) {
//     let student = JSON.parse(xhr.responseText);
//     document.getElementById("result").innerHTML = `
//       <h1>${student.name}</h1>
//       <ul><li>전공 : ${student.major}</li>
//       <li>학년 : ${student.grade}</li>
//       </ul>
//     `
//   }
// }

// 데이터가 여러개일 경우 undefined가 나오므로
// 별도의 함수를 떼어서 반복문을 돌려 실제로
// 데이터들 가운데서 한명 한명씩 ul태그를 활용해서
// 별도로 분리를 시키면 된다.

let xhr = new XMLHttpRequest();
xhr.open("GET","student.json");
xhr.send(); // 정상으로 데이터가 왔는지 콘솔창에서 확인해보기

xhr.onreadystatechange = function() {
  if(xhr.readyState == 4 && xhr.status == 200) {
    let students = JSON.parse(xhr.responseText);
    renderHTML(students);
    // document.getElementById("result").innerHTML = `
    //   <h1>${student.name}</h1>
    //   <ul><li>전공 : ${student.major}</li>
    //   <li>학년 : ${student.grade}</li>
    //   </ul>
    // `
  }
};

function renderHTML(students) {
  let output = "";
  for (let student of students) {
    output += `
    <h2>${student.name}</h2>
    <ul>
    <li>전공 : ${student.major}</li>
    <li>학년 : ${student.grade}</li>
    </ui>
    `
  }
  document.getElementById("result").innerHTML = output;
}


// 모르겠는거 체크체크
// 함수 호출하는 위치를 잘 모르겠다 ,,
// 어쩔땐 innerhtml 안써도 화면에 출력이 되는데 어쩔땐 써야하는데
// 그게 구분이 안감ㅎ

// ★★ 오류처리 
// try {
//   console.log("시작");
//   add();
//   console.log("실행중....");
// } catch(err) {
//   console.log(`오류발생 : ${err}`)
// }

// console.log("끝");

// catch는 오류가 나는걸 찾으라는 함수!
// 발생이 되고나서 넘어가서 마지막까지 출력할건 출력할수있게 만들어줌
// try이랑 catch는 항상 쌍으로 움직임!
// 예외처리를 처리할수있도록 도와준다.

// 제이슨 파일을 정의하고 오류 경고문을 띄워보자!!

// let json = `{"grade" : 3, "age" : 25}`
// try {
//   let user = JSON.parse(json);
//   if (!user.name) {
//     throw "사용자 이름이 없습니다.";
//   }
//   console.log("시작");
//   add();
//   console.log("실행중....");
// } catch(err) {
//   console.log(err)
// }

// console.log("끝");
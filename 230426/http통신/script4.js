// 여기서 공부할것 index1 xhr이랑 사용한거 비교하기!

fetch('student.json') // fetch는 오픈/센드 메서드 필요없이 이게 끝..
.then(response => response.json())
.then(json => {
  let output = "";
  json.forEach(student => {
    output += `
    <h2>${student.name}</h2>
    <ul>
    <li>전공 : ${student.major}</li>
    <li>학년 : ${student.grade}학년</li>
    </ul>
    `
  });
  document.querySelector("#result").innerHTML = output;
})
.catch(err => console.log(err));
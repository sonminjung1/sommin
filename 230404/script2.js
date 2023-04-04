// ★★ getElementById 온클릭 마우스오버 / 마우스 아웃
// document.getElementById("heading").onmouseover = function() {
//   this.style.fontSize = "100px"
// }
// document.getElementById("heading").onmouseout = function() {
//   this.style.fontSize = "20px"
// }

// ★★ getElementsByClassName 스타일 주기
// document.getElementsByClassName("accent")[0].style.textDecoration="underline";

// document.getElementsByClassName("accent")[1].style.textDecoration="underline";


// ★★ queryselector ("container")
// ★★ getelementById ("container")
// 둘의 차이점은?

//Element => 가운데 적용되어있는 메서드 함수의 경우, 태그 노드까지만 스타일을 적용 가능

// 쿼리셀렉터 = > 속성노드 및 텍스트 노드까지 접근 가능하며 스타일 및 기타요소 편집이 가능함

// ★★ getAttribute () : 속성값을 알기위한 함수
// ★★ setAttribute () : 속성값을 변경하기 위한 함수
// ★★ addEventListener () : 한 요소에 여러 이벤트가 발생했을 때, 동시에 처리할 수 있는 이벤트 함수

// ★★ setAttribute 개념 알기
let bigPic = document.querySelector("#cup");
let smallPics = document.querySelectorAll(".samll");

for (let i = 0; i < smallPics.length; i++) {
  smallPics[i].addEventListener("click", changePic);
}

function changePic() {
  let newPic = this.src;
  bigPic.setAttribute("src", newPic);
}

let isOpen = false;
let view = document.querySelector('#view');
view.addEventListener("click", pageOpen);


function pageOpen() {
  if(isOpen == false) {
    document.querySelector('#detail').style.display = "block";
    view.innerHTML = "상세 설명 닫기";
    isOpen = true;
  } else {
    document.querySelector('#detail').style.display="none";
    view.innerHTML = "상세 설명 보기";
    isOpen = false;
  }
}
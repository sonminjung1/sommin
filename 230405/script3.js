// DOM에 요소 추가하기 ★★

let newP = document.createElement("p");
let newText = document.createTextNode("주문이 완료되었습니다.");
let attr = document.createAttribute("class");

newP.appendChild(newText);
document.body.appendChild(newP);
attr.value = "accent";
newP.setAttributeNode(attr);
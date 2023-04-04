// ★★ 미리 생각해 볼 것! ★★
// 1.데이터가 어딘가에 저장
// 2. 저장된 데이터가 시각적으로 표현 > html
// 3. 삭제 시 데이터가 사라져야 한다.

let itemList = [];

let addBtn = document.querySelector("#add");
// addBtn.addEventListener("click",addList);
addBtn.onclick = addList;

function addList(evet) {
  evet.preventDefault();
  let item = document.querySelector("#item").value;
  if (item != null) {
    itemList.push(item);
    document.querySelector("#item").value="";
    document.querySelector("#item").focus();
  }
  showList();
}
function showList() {
  let list = "<ul>";
  for (let i = 0; i < itemList.length; i++) {
    list += "<li>" + itemList[i] + "<span class='close' id=" + i +"> X </span> + </li>"
  }
  list += "</ul>";

  document.querySelector("#itemList").innerHTML = list;

  let remove = document.querySelectorAll(".close");
  for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", removeList);
  }
}

function removeList() {
  let id =this.getAttribute("id");
  itemList.splice(id, 1);
  showList();
}
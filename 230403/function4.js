function chColor() {
  let arrCorol = ["#ff0","#6c0","#cf0","#cf0","#cf0"];
  let arrNum = Math.floor(Math.random() * arrCorol.length);
  let bodyTag = document.getElementById("theBody");
  bodyTag.style.backgroundColor = arrCorol[arrNum];
}
const result = document.querySelector("#result");
const url = "https://reqres.in/api/product/10"

// 일단 json 데이터를 저장해둘 공간을 정의하자!
let xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
// 위에 true는 비동기 방식으로 불러오는건지 확인하는 것
xhr.send();

xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let product = JSON.parse(xhr.responseText);
    console.log(product);
    result.innerHTML = `
    <p>상품명 : ${product.data.name}</p>
    <p>컬러 : ${product.data.color}</p>
    <p>생산년도 : ${product.data.year}년도식</p>
    <p>생산년도 : ${product.support.url}년도식</p>
    `;
    // json 안에 json이 있다!
  }
}
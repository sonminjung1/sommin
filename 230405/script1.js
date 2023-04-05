const openButton = document.querySelector('.open');
const container = document.querySelector('.container');
const closeButton = document.querySelector('.close');
const imgButton = document.querySelector('.imgBtn');

openButton.addEventListener('click', () => {
  container.style.display = 'flex';
  openButton.style.display = 'none';
});

closeButton.addEventListener('click', () => {
  container.style.display = 'none';
  openButton.style.display = 'flex';
});

imgButton.addEventListener('click', () => {
  container.style.display = 'none';
  openButton.style.display = 'flex';
});

/* 
1. html -> 첫번째 페이지로 나올 요소를 먼저 작업 하고
모달 페이지로 나올 요소를 그 다음 작업

2. css -> 첫번째 페이지 스타일링,
모달 페이지로 나올 요소 스타일링 (* display : none)

3. JS -> 각각의 요소를 변수값에 할당
첫번째 페이지에 이벤트가 작동했을 때, 나올 페이지
두번째 페이지에서 이벤트가 작동했을 때, 나올 페이지
*/
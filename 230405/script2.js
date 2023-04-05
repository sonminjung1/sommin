const openBtn = document.querySelector('.open');
const container = document.querySelector('.container');
const closeBtn = document.querySelector('.close');
const imgBtn = document.querySelector('.imgBtn');

openBtn.addEventListener('click', () => {
  container.style.display = 'flex';
  openBtn.style.display = 'none';
});
closeBtn.addEventListener('click', () => {
  container.style.display = 'none';
  openBtn.style.display = 'flex';
});
imgBtn.addEventListener('click',() => {
  container.style.display = 'none'
  openBtn.style.display = 'flex'
});

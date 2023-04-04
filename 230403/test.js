const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

function clock(){
  const now = new Date(); 

  hour.innerText = now.getHours()+"시";
  min.innerText = now.getMinutes()+"분";
  sec.innerText = now.getSeconds()+"초";
}
setInterval(clock, 1000);

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

let todos = [];


form.addEventListener('submit',(event) => {
  event.preventDefault();

  if(input.value !=='') {
    const li = document.createElement('li');
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = '';
  }
});